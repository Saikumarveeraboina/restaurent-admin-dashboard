# 🍽️ Restaurant Admin Dashboard – Eatoes Intern Technical Assessment

## 📌 Project Overview

The **Restaurant Admin Dashboard** is a full-stack web application built to help restaurant owners and managers efficiently manage their menu items and customer orders.

This project was developed as part of the **Eatoes Intern Technical Assessment** and demonstrates real-world usage of **RESTful APIs, MongoDB, React best practices, and production deployment**.

The dashboard focuses on **admin-side functionality**, such as menu management, order tracking, and inventory availability, similar to real restaurant management systems.

---

## 🚀 Live Demo

- **Frontend (Netlify):**  
  👉 https://restaurent-dashboard.netlify.app

- **Backend API (Render):**  
  👉 https://restaurent-admin-dashboard.onrender.com

---

## 🧩 Key Features

### 🍽️ Menu Management
- View all menu items in a responsive grid
- Add new menu items using a modal form
- Edit existing menu items
- Delete menu items
- Toggle item availability (Available / Unavailable)
- Search menu items with **debounced search (300ms delay)**
- MongoDB text search on name and ingredients

### 📦 Orders Dashboard
- View all customer orders
- Display order status with visual badges
- Update order status (Pending → Preparing → Ready → Delivered)
- View detailed order items
- Optimistic UI updates for status changes

### 📊 Analytics (Bonus)
- MongoDB aggregation pipeline to calculate **Top Selling Menu Items**
- Uses `$unwind`, `$group`, `$lookup`, `$sort`, and `$limit`

---

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Axios
- React Router
- Custom Hooks (useDebounce)
- CSS (Flexbox, Grid, Gradient UI)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- RESTful API design
- CORS handling
- MVC architecture

### Database
- MongoDB Atlas (Free Tier)

### Deployment
- **Frontend:** Netlify
- **Backend:** Render
- **Database:** MongoDB Atlas

---
