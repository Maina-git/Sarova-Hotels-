# Sarova Hotels

## Overview

Sarova Hotels is a modern full-stack hotel booking platform inspired by the luxury experience offered by Sarova Hotels. The application enables users to browse hotels, explore available rooms, create bookings, manage their profiles, and enjoy a seamless hotel reservation experience.

The project was built to demonstrate full-stack development skills using React, TypeScript, Express.js, Prisma ORM, and Neon PostgreSQL.

---

## Live Demo

https://sarova-hotels-2zxk.vercel.app/

---

## Features

### User Features

- User Registration
- User Login & Authentication
- JWT Protected Routes
- Browse Available Hotels
- View Hotel Details
- Explore Room Listings
- Book Hotel Rooms
- View Personal Bookings
- User Profile Management
- Responsive Design

### Admin Features

- Add New Hotels
- Manage Hotel Information
- Add Rooms to Hotels
- View Hotel Data
- Manage Room Availability

---

## Key Achievements

This project demonstrates:

- Full-stack application architecture
- RESTful API development with Express.js
- JWT Authentication and Authorization
- Password Hashing using Bcrypt
- Database Management using Prisma ORM
- PostgreSQL Integration with Neon Database
- React TypeScript Frontend Development
- Responsive UI Design using Tailwind CSS
- Protected Backend Routes
- Hotel Management System
- Room Management System
- Booking Management Functionality

---

## Tech Stack

### Frontend

- React.js
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- React Icons

### Backend

- Node.js
- Express.js
- Prisma ORM
- JWT Authentication
- Bcrypt.js
- CORS
- Dotenv

### Database

- Neon PostgreSQL

---

## Project Structure

```text
sarova-hotels/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   └── App.tsx
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── prisma/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
│
└── package.json
```

---

## Installation

### 1. Clone Repository

```bash
git clone <repository-url>

cd sarova-hotels
```

---

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd server
```

Initialize package.json if needed:

```bash
npm init -y
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

Navigate to the frontend folder:

```bash
cd client
```

Initialize package.json if needed:

```bash
npm init -y
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the server directory.

```env
DATABASE_URL=your_neon_database_url

JWT_SECRET=your_jwt_secret

PORT=5000
```

---

## Database Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Seed database:

```bash
npx prisma db seed
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

#### Get Profile

```http
GET /api/auth/profile
```

---

### Hotels

#### Get All Hotels

```http
GET /api/hotels
```

#### Get Single Hotel

```http
GET /api/hotels/:id
```

#### Add Hotel

```http
POST /api/hotels
```

---

### Rooms

#### Get All Rooms

```http
GET /api/rooms
```

#### Get Room By ID

```http
GET /api/rooms/:id
```

#### Create Room

```http
POST /api/rooms
```

---

### Bookings

#### Create Booking

```http
POST /api/bookings
```

#### Get User Bookings

```http
GET /api/bookings/my-bookings
```

---

## Authentication Flow

1. User Registers
2. Password is Hashed Using Bcrypt
3. User Logs In
4. JWT Token is Generated
5. Token is Stored on Client Side
6. Protected Routes Verify JWT
7. Authorized Users Access Private Resources

---

## Current Functionality

### Completed

- User Registration
- User Login
- JWT Authentication
- Protected Profile Route
- Add Hotels
- Fetch Hotels
- Neon PostgreSQL Integration
- Prisma ORM Integration
- Responsive Frontend Design

### In Progress

- Room Management
- Hotel Details Page
- Room Booking Flow
- Booking History

---

## Future Enhancements

- Online Payments
- Search Hotels
- Filter Hotels
- Hotel Reviews
- Ratings System
- Email Notifications
- Booking Confirmation Emails
- Admin Dashboard
- Analytics Dashboard
- Room Availability Calendar
- AI-Powered Hotel Recommendations

---

## Learning Outcomes

Through this project, I strengthened my skills in:

- React.js Development
- TypeScript
- Express.js Backend Development
- REST API Design
- Authentication & Authorization
- Database Design
- Prisma ORM
- PostgreSQL
- Neon Database
- State Management
- Responsive UI Design
- Full-Stack Application Architecture

---

## Author

### Francis Maina

Software Engineer | Frontend Developer

Passionate about building scalable web applications using modern technologies such as React, TypeScript, Node.js, Express.js, Prisma ORM, and PostgreSQL.

---

## License

This project is intended for educational, portfolio, and demonstration purposes.