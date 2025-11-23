# 🚀 Rahidul's Portfolio Website

A modern, full-stack portfolio website built with **React + Vite** (Frontend) and **Express + MySQL** (Backend).

## ⚡ Getting Started (5 Minutes)

**For the impatient:**
```bash
# Terminal 1
cd Backend && node setup.js && node server.js

# Terminal 2
npm run dev
```
Then open `http://localhost:5174` 🎉

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Theme**: Beautiful dark gradient background with smooth animations
- **Scroll Animations**: Header transitions smoothly on scroll
- **Contact Form**: Fully functional form with backend integration and MySQL storage
- **Project Showcase**: 10+ portfolio projects with descriptions
- **Skills Section**: Visual skill display with SVG icons and progress bars
- **SEO Optimized**: Proper metadata and semantic HTML
- **API Integration**: RESTful backend API for feedback submission

## 📋 Tech Stack

### Frontend
- React 19.2.0
- Vite 7.2.2
- CSS3 (Flexbox, Grid, Animations)
- Responsive Design

### Backend
- Express.js
- MySQL2
- CORS & Express-Validator
- dotenv for environment variables

## 🎯 Quick Start

### Prerequisites
- **Node.js** v18+ ([Download](https://nodejs.org/))
- **MySQL Server** installed and running ([Download](https://www.mysql.com/downloads/))
- A code editor (VS Code recommended)

### Option 1: Manual Setup (Recommended)

**Step 1: Start Backend Server**
```bash
cd Backend
npm install
node server.js
```
✅ Backend will run on `http://localhost:4000`

**Step 2: Set Up Database**
```bash
cd Backend
node setup.js
```
✅ This creates the `feedback` database and `feedbacks` table

**Step 3: Start Frontend Server (New Terminal)**
```bash
npm install
npm run dev
```
✅ Frontend will open at `http://localhost:5174`

### Option 2: One-Click Start (Windows)
1. Double-click `start-dev.bat`
2. Wait 30 seconds
3. Both servers start automatically

## 📖 How to Use This Portfolio

### 1. **View Your Portfolio**
- Open `http://localhost:5174` in your browser
- Browse through all sections: Hero, Skills, Projects, About, Contact
- Test responsive design by resizing the browser

### 2. **Using the Contact Form**
- Scroll to the "**Contact**" section at the bottom
- Fill in all fields:
  - **Name**: Your full name
  - **Email**: Your email address
  - **Subject**: Message subject
  - **Message**: Your message (max 1000 characters)
- Click "**Send Message**"
- See success confirmation message
- Data is automatically saved to MySQL database

### 3. **View Submitted Messages**
**Backend Terminal:**
```bash
# Messages are logged when submitted
# Check your MySQL database:
mysql -u root -p192006
USE feedback;
SELECT * FROM feedbacks;
```

**Via API:**
```bash
curl http://localhost:4000/api/feedbacks
```

### 4. **Customize Your Content**
Edit component files to personalize:

**Update Profile Info:**
- `src/components/Hero.jsx` - Welcome message
- `src/components/About.jsx` - Your bio and background

**Update Skills:**
- `src/components/Skills.jsx` - Add/remove skills and proficiency levels

**Update Projects:**
- `src/components/Projects.jsx` - Add your own projects with images

**Update Contact Info:**
- `src/components/Contact.jsx` - Email, LinkedIn, GitHub links

### 5. **Customize Styling**
- `src/index.css` - Global dark gradient background
- `src/App.css` - Animations and utilities
- `src/components/*.css` - Individual component styles

**To change colors:**
Edit the gradient in `src/index.css`:
```css
body {
  background: linear-gradient(135deg, #1e2752 0%, #000000 100%);
}
```

### 6. **Test API Endpoints**

**Health Check:**
```bash
curl http://localhost:4000/api/health
```
Response: `{"status":"Server is running"}`

**Submit Feedback:**
```bash
curl -X POST http://localhost:4000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "Nice portfolio!"
  }'
```

**Get All Feedback:**
```bash
curl http://localhost:4000/api/feedbacks
```

### 7. **Browser DevTools**
Press `F12` to open Developer Tools:
- **Console**: See form submission messages and errors
- **Network**: Monitor API calls to backend
- **Elements**: Inspect and modify styling
- **Application**: Check local storage and cookies

## 📱 Responsive Testing
Test on different screen sizes:
1. Desktop (1920px) - Full layout
2. Tablet (768px) - Medium layout
3. Mobile (375px) - Small layout

**In DevTools:**
- Click device toolbar icon
- Select various device presets
- Check if all sections are readable

## 📁 Project Structure

```
portfolio/
├── Backend/
│   ├── server.js              # Express server with API routes
│   ├── package.json           # Backend dependencies
│   ├── .env                   # Database configuration
│   └── setup-database.sql     # MySQL schema
├── src/
│   ├── components/            # React components
│   │   ├── Header.jsx         # Navigation with scroll detection
│   │   ├── Hero.jsx           # Welcome section
│   │   ├── Expertise.jsx      # Skills showcase
│   │   ├── Milestones.jsx     # Featured projects
│   │   ├── Projects.jsx       # Full projects grid
│   │   ├── About.jsx          # About with tabs and icons
│   │   ├── Skills.jsx         # Technical skills with progress
│   │   ├── Certifications.jsx # Certificates display
│   │   ├── Availability.jsx   # Freelance opportunities
│   │   ├── Contact.jsx        # Contact form with API
│   │   └── Footer.jsx         # Footer section
│   ├── assets/                # SVG icons and images
│   ├── App.jsx                # Main application
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── public/                    # Static files
├── package.json               # Frontend dependencies
├── vite.config.js             # Vite configuration
├── index.html                 # HTML template
├── SETUP_GUIDE.md             # Detailed setup instructions
└── start-dev.bat              # Windows batch starter
```

## 🔗 API Endpoints

### Health Check
```
GET /api/health
Response: { status: "Server is running" }
```

### Submit Contact Form
```
POST /api/feedback
Content-Type: application/json

{
  "name": "Your Name",
  "email": "your@email.com",
  "subject": "Subject",
  "message": "Your message"
}

Response: {
  "success": true,
  "id": 1,
  "message": "Feedback saved successfully"
}
```

### Get All Submissions (Admin)
```
GET /api/feedbacks
Response: {
  "success": true,
  "count": 5,
  "data": [...]
}
```

## 🎨 Design Features

- **Dark Gradient Background**: Linear gradient from `#1e2752` to `#000000`
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Smooth Transitions**: All interactions use CSS transitions
- **Scroll-based Effects**: Header background changes on scroll
- **Responsive Layout**: Mobile-first design approach
- **SVG Icons**: Scalable icons for technologies and social links

## 🔧 Configuration

### Database Setup
The database is automatically configured via `setup-database.sql`. To manually set up:

```sql
CREATE DATABASE IF NOT EXISTS feedback;
USE feedback;

CREATE TABLE IF NOT EXISTS feedbacks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
);
```

### Environment Variables
Create `.env` in the `Backend/` folder:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=feedback
PORT=4000
```

## 🧪 Testing

### Test Backend
```bash
# Health check
curl http://localhost:4000/api/health

# Submit test feedback
curl -X POST http://localhost:4000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Test message"
  }'
```

### Test Frontend
1. Open http://localhost:5174 in your browser
2. Fill out and submit the contact form
3. Check browser console for confirmation
4. Verify data in MySQL database

## 📦 Building for Production

**Frontend:**
```bash
npm run build
# Creates optimized build in dist/ folder
npm run preview  # Preview production build locally
```

**Backend:**
- Update `.env` with production database credentials
- Deploy to a hosting service (Heroku, AWS, DigitalOcean, etc.)
- Ensure database credentials are kept secure

## ❓ FAQ

**Q: How do I update my project portfolio?**
A: Edit the `src/components/Projects.jsx` file and add your project data.

**Q: Can I change the dark theme to a light theme?**
A: Yes! Edit `src/index.css` and change the gradient color values to lighter colors.

**Q: Where are submitted messages stored?**
A: In the MySQL `feedback.feedbacks` table. Access via:
```bash
mysql -u root -p192006
USE feedback;
SELECT * FROM feedbacks;
```

**Q: How do I add more skills?**
A: Edit `src/components/Skills.jsx` and add skill objects to the arrays.

**Q: Can I deploy this to production?**
A: Yes! Build frontend with `npm run build`, then deploy to Vercel/Netlify. Deploy backend to Heroku/AWS.

**Q: Is my data secure?**
A: Yes! The backend validates all inputs, uses parameterized queries to prevent SQL injection, and has CORS enabled.

**Q: How do I get email notifications when someone submits the form?**
A: You can integrate Nodemailer or SendGrid. Update the POST `/api/feedback` route in `Backend/server.js`.

**Q: What if the contact form doesn't work?**
A: Check: 1) Is MySQL running? 2) Is backend server on port 4000? 3) Did you run `node setup.js`?

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Ensure MySQL is running and credentials in `.env` are correct |
| CORS errors | Backend already has CORS enabled for `localhost:5174` |
| Form not submitting | Check browser console and backend terminal for error messages |
| Port already in use | Change PORT in `.env` or kill process using the port |
| Database connection fails | Verify MySQL is running: `mysql -u root -p` |

## 📝 Form Validation

All form fields are validated:
- **Name**: Required, non-empty
- **Email**: Required, valid format
- **Subject**: Required, non-empty
- **Message**: Required, non-empty

Invalid submissions return error details for correction.

## 🔐 Security Features

- CORS configured for development
- Input validation with express-validator
- SQL injection prevention via parameterized queries
- Error handling without exposing sensitive info
- Rate limiting ready (can be added with express-rate-limit)

## 📸 Components Overview

| Component | Purpose |
|-----------|---------|
| Header | Sticky navigation with scroll detection |
| Hero | Main welcome section |
| Expertise | 3-column skill showcase |
| Milestones | Featured projects highlight |
| Projects | Full grid of 10+ projects |
| About | Tabbed section with bio, skills, experience |
| Skills | Technical skills with progress bars |
| Certifications | Certification display |
| Availability | Freelance opportunity showcase |
| Contact | Contact form with API integration |
| Footer | Footer with social links |

## 🌐 Deployment

For detailed deployment instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## 📄 License

© 2024 Rahidul Khan. All rights reserved.

## 📧 Contact

- **Email**: krahidul869@gmail.com
- **LinkedIn**: [Rahidul Khan](https://linkedin.com/in/rahidul-khan-6a3922269)
- **GitHub**: [Rahidul2006](https://github.com/Rahidul2006)
- **Instagram**: [@epic._.soul._.196](https://www.instagram.com/epic._.soul._.196/)

## 🚀 Next Steps

### Immediate Actions
- [ ] Run `node setup.js` to create database
- [ ] Start backend: `node server.js`
- [ ] Start frontend: `npm run dev`
- [ ] Open http://localhost:5174
- [ ] Test contact form with sample data

### Customization
- [ ] Edit your name and bio in Hero/About components
- [ ] Add your projects to Projects.jsx
- [ ] Update social media links in Contact.jsx
- [ ] Customize colors in index.css
- [ ] Add/remove skills in Skills.jsx

### Before Going Live
- [ ] Remove test data from database
- [ ] Update all social media links
- [ ] Test form validation with invalid data
- [ ] Check responsive design on mobile
- [ ] Update favicon in public folder
- [ ] Run `npm run build` for production

### Deployment
- [ ] Deploy frontend to Vercel or Netlify
- [ ] Deploy backend to Heroku or AWS
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Configure production environment variables

---

**Happy Coding! 🎉**