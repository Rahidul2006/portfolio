const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '192006',
  database: process.env.DB_NAME || 'feedback',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// POST endpoint to receive feedback
app.post('/api/feedback', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
], async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;
    const connection = await pool.getConnection();

    try {
      const query = 'INSERT INTO feedbacks (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())';
      const [result] = await connection.execute(query, [name, email, subject, message]);

      res.status(201).json({
        success: true,
        id: result.insertId,
        message: 'Feedback saved successfully'
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

// GET all feedbacks (optional - for admin purposes)
app.get('/api/feedbacks', async (req, res) => {
  try {
    const connection = await pool.getConnection();

    try {
      const [rows] = await connection.execute('SELECT * FROM feedbacks ORDER BY created_at DESC');
      res.json({
        success: true,
        count: rows.length,
        data: rows
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch feedbacks' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 POST /api/feedback - Submit feedback`);
  console.log(`📋 GET /api/feedbacks - Get all feedbacks`);
  console.log(`❤️  GET /api/health - Health check`);
});
