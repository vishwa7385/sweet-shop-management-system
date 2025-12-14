# 🍬 Sweet Shop Management System

## 📌 Overview

Sweet Shop Management System is a full-stack web application that allows users to manage sweets inventory, purchase sweets, and perform admin-level operations such as adding, restocking, and deleting sweets.

The project is built using **Node.js (Express)** for the backend and **ReactJS** for the frontend.  
Authentication is implemented using **JWT-based token authentication** with **role-based access control (Admin/User)**.

This project is developed as part of the **Incubyte Sweet Shop Management Kata**.

---

## ✨ Key Features

### 👤 Authentication
- User Registration & Login
- JWT-based authentication
- Role-based access control (Admin / User)

### 🍭 Sweet Management
- Add new sweets (Admin only)
- View all available sweets
- Search sweets by **name**, **category**, or **price range**
- Update sweet details
- Delete sweets (Admin only)

### 📦 Inventory Management
- Purchase sweets (stock decreases)
- Restock sweets (Admin only)
- Purchase disabled when stock is zero

### 🎨 Frontend
- Responsive UI
- Admin and User views
- Search bar, filters, and sorting
- Clean layout with styled buttons and spacing

---



---

## 🔐 API Endpoints

### Auth
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Sweets (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/sweets` | Add a new sweet (Admin) |
| GET | `/api/sweets` | Get all sweets |
| GET | `/api/sweets/search` | Search sweets |
| PUT | `/api/sweets/:id` | Update sweet |
| DELETE | `/api/sweets/:id` | Delete sweet (Admin) |

### Inventory (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/sweets/:id/purchase` | Purchase sweet |
| POST | `/api/sweets/:id/restock` | Restock sweet (Admin) |

---

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt
- RESTful APIs

### Frontend
- ReactJS
- Axios
- React Router
- Context API
- CSS (Custom Styling)

---

## ▶️ How to Run the Project

### 🔧 Backend Setup
```bash
cd backend
npm install
npm run dev

Backend runs on:
http://localhost:5000


Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:
http://localhost:5173


🧪 Testing

APIs tested using Postman
Edge cases like stock validation handled
Proper error handling using HTTP status codes

🤖 My AI Usage
I used ChatGPT as an AI assistant during development to:
Design REST API structure
Debug authentication & authorization issues
Fix frontend-backend integration errors
Refactor code for readability and maintainability
All core logic, decisions, and implementation were written and verified by me.
AI was used strictly as a development assistant.


👨‍💻 Author
Vishwajeet Shinde
GitHub: https://github.com/vishwa7385







## 🗂️ Project Structure

