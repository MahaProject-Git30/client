# 🔐 MERN Authentication System (Full Stack)

A complete MERN Stack Authentication Project that includes User Registration, Login, Forgot Password, Reset Password, and Protected Dashboard with modern UI.

---

## 🚀 Tech Stack

Frontend:
React (Vite), Tailwind CSS, Axios, React Router DOM, React Icons

Backend:
Node.js, Express.js, MongoDB (Mongoose), JWT, Bcrypt, Resend

---

## 📁 Project Structure

project/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   Login.jsx
│   │   │   Register.jsx
│   │   │   ForgotPassword.jsx
│   │   │   ChangePassword.jsx
│   │   │   Dashboard.jsx
│   │   ├── services/
│   │   │   api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── models/
│   │   User.js
│   ├── controllers/
│   │   authController.js
│   ├── routes/
│   │   authRoutes.js
│   ├── server.js
│   └── package.json

---

## ⚙️ Installation

Clone project:

git clone <your-repo-url>
cd project

---

## ▶️ Run Backend

cd server  
npm install  
npm run dev  

Backend runs on: http://localhost:3001

---

## ▶️ Run Frontend

cd client  
npm install  
npm run dev  

Frontend runs on: http://localhost:5173

---

## 🔌 API Configuration

client/src/services/api.js

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api"
});

export default API;

---

## 📄 API Endpoints

POST /api/auth/register → Register user  
POST /api/auth/login → Login user  
POST /api/auth/forgot → Send reset email  
POST /api/auth/reset/:token → Reset password  

---

## 🔒 Authentication Flow

1. User registers  
2. User logs in → gets JWT token  
3. Token stored in localStorage  
4. Dashboard checks token  
5. If no token → redirect to login  

---

## 🔁 Forgot Password Flow

1. Enter email  
2. Backend creates reset token  
3. Email sent  
4. User clicks link  
5. Redirect to reset page  
6. Set new password  

---

## 🖥️ Pages

Login (/)
- Email & password login

Register (/register)
- Create account

Forgot Password (/forgot)
- Send reset email

Change Password (/change-password/:token)
- Update password

Dashboard (/dashboard)
- Protected page

---

## ⚠️ Validation

- Email format check  
- Password minimum 6 characters  
- Confirm password must match  
- Required fields validation  

---

## 🎨 UI Features

- Gradient backgrounds  
- Glassmorphism design  
- Smooth animations  
- Responsive UI  

---

## 🔐 Security

- Password hashing (bcrypt)  
- JWT authentication  
- Reset token expiry  
- Protected routes  

---

## 📦 Dependencies

Frontend:
react, react-dom, axios, react-router-dom, react-icons, tailwindcss, vite

Backend:
express, mongoose, bcryptjs, jsonwebtoken, dotenv, resend, crypto, cors

---

## 🌐 Deployment

Frontend: Netlify / Vercel  
Backend: Render / Railway  
Database: MongoDB Atlas  

---

## 📌 .env Example (Backend)

PORT=3001  
MONGO_URI=your_mongodb_url  
JWT_SECRET=your_secret  
RESEND_API_KEY=your_key  
CLIENT_URL=http://localhost:5173  

---

## 👩‍💻 Author

Mahalakshmi R

---

## ⭐ Notes

- Backend must run before frontend  
- Email works only if Resend is configured  
- Change API URL after deployment  

---

## 🎯 Conclusion

This is a complete MERN authentication system useful for real-world apps, portfolio, and interviews.

---