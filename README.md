Full-Stack JWT Role-Based Authentication

🚀 Project Overview

This is a Full-Stack Role-Based Authentication System built using Spring Boot (Backend) and React (Frontend) with JWT (JSON Web Token) Security. The application provides authentication and authorization for User and Admin roles, ensuring secure access to protected resources.

🔑 Key Features

JWT Authentication for secure login and authorization
Role-Based Access Control (RBAC) for Users and Admins
Spring Security for backend protection
MySQL Database integration for user management
React Frontend with protected routes
RESTful API with Spring Boot
User Registration and Login with encrypted passwords
Token-Based Authorization for accessing secured endpoints

🛠️ Tech Stack

Backend:

Spring Boot (Spring Security, Spring Data JPA)
MySQL (Relational Database Management)
JWT (JSON Web Tokens) for Authentication
Maven for project management
Frontend:
React.js (React Router, Axios for API calls)

📂 Folder Structure

Full_stack_jwt_security/ │── backend/ # Spring Boot backend │ ├── src/main/java/com/example/security │ ├── src/main/resources/application.properties │ ├── pom.xml # Maven dependencies │ │── frontend/ # React frontend │ ├── src/ │ ├── public/ │ ├── package.json # Dependencies │ │── README.md # Project Documentation

🔧 Setup & Installation

1️⃣ Clone the Repository
git clone https://github.com/your-username/Full_stack_jwt_security.git
cd Full_stack_jwt_security

🔗 API Endpoints

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login and get JWT     |
| GET    | `/api/user`          | Access user content   |
| GET    | `/api/admin`         | Admin-only access     |
