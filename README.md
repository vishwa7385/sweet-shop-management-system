# 🍬 Sweet Shop Management System

## Overview

Sweet Shop Management System is a full-stack web application that manages sweets inventory with role-based access. Users can view and purchase sweets, while admin users can add, restock, update, and delete sweets.

The backend is built using Node.js with Express and MongoDB.  
The frontend is built using ReactJS as a single-page application (SPA).  
Authentication is implemented using JWT tokens.

This project is developed for the Incubyte Sweet Shop Management Kata.

---

## Key Features

### Authentication
- User registration and login
- JWT-based authentication
- Role-based access control (Admin / User)

### Sweet Management
- View all available sweets
- Add new sweets (Admin only)
- Update sweet details
- Delete sweets (Admin only)
- Search sweets by name, category, or price range

### Inventory Management
- Purchase sweets (quantity decreases)
- Restock sweets (Admin only)
- Purchase button disabled when stock is zero

### Frontend UI
- Responsive and clean UI
- Admin and User dashboards
- Navbar with search and add sweet options
- Styled buttons with proper spacing

---

## API Endpoints

Auth  
POST /api/auth/register  
POST /api/auth/login  

Sweets (Protected)  
POST /api/sweets  
GET /api/sweets  
GET /api/sweets/search  
PUT /api/sweets/:id  
DELETE /api/sweets/:id  

Inventory (Protected)  
POST /api/sweets/:id/purchase  
POST /api/sweets/:id/restock  

---

## Project Structure

sweet-shop-management-system  
backend  
- controllers  
- models  
- routes  
- middleware  
- config  
- server.js  
- package.json  

frontend  
- components  
- pages  
- context  
- api  
- styles  
- main.jsx  
- package.json  

README.md  

---

## Technologies Used

Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

Frontend
- ReactJS
- Axios
- React Router
- Context API
- CSS

---

## How to Run

Backend

cd backend  
npm install  
npm run dev  

Backend URL  
http://localhost:5000  

Frontend

cd frontend  
npm install  
npm run dev  

Frontend URL  
http://localhost:5173  

---

## Testing

- APIs tested using Postman
- Proper error handling with HTTP status codes
- Stock validation implemented for purchase and restock

---

## My AI Usage

I used ChatGPT as an AI assistant to:
- Design REST API endpoints
- Debug frontend and backend integration issues
- Resolve authentication and authorization errors
- Improve code readability and structure

All development decisions, logic, and final implementation were done by me.  
AI was used strictly as a productivity and debugging assistant.

---


## Author

Vishwajeet Shinde  
GitHub: https://github.com/vishwa7385  

This project is built as part of the Incubyte Sweet Shop Management Kata.
