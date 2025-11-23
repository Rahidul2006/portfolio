const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  try {
    console.log('🔧 Setting up database...');
    
    // Connect to MySQL without specifying database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '192006'
    });

    console.log('✅ Connected to MySQL');

    // Create database
    await connection.execute('CREATE DATABASE IF NOT EXISTS feedback');
    console.log('✅ Database "feedback" created/exists');

    // Create table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS feedback.feedbacks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message LONGTEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_created_at (created_at)
      )
    `);
    console.log('✅ Table "feedbacks" created/exists');

    // Show table structure
    const [rows] = await connection.execute('DESCRIBE feedback.feedbacks');
    console.log('\n📋 Table Structure:');
    console.table(rows);

    await connection.end();
    console.log('\n🎉 Database setup complete!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

setupDatabase();
