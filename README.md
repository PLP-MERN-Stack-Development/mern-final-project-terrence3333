# TeamFlow - MERN Capstone Project

[![Frontend](https://img.shields.io/badge/Frontend-React-blue)](#)
[![Backend](https://img.shields.io/badge/Backend-Node.js-green)](#)
[![Database](https://img.shields.io/badge/Database-MongoDB-blueviolet)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow)](#)

Live Demo:

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Accessibility & Responsiveness](#accessibility--responsiveness)
- [Video Demo](#video-demo)
- [License](#license)

---

## Project Overview

TeamFlow is a full-stack MERN application for managing projects and tasks with real-time collaboration. Users can:

- Create and manage projects
- Assign tasks to team members
- Track progress in a Kanban-style board
- Receive live updates via WebSockets

This project showcases authentication, authorization, database relationships, RESTful APIs, real-time features, testing, and deployment.

---

## Features

- User registration and login (JWT authentication)
- Role-based access control
- Project CRUD operations
- Task management with Kanban board
- Real-time updates via Socket.io
- Responsive and accessible UI using React & Tailwind CSS
- RESTful API with Express.js and MongoDB
- Unit, integration, and e2e testing
- CI/CD ready with GitHub Actions
- Dockerized for local development and production

---

## Technology Stack

- **Frontend:** React, React Router, Tailwind CSS, Axios, Socket.io-client
- **Backend:** Node.js, Express.js, Socket.io
- **Database:** MongoDB (Mongoose)
- **Testing:** Jest, Supertest, Cypress
- **Deployment:** Docker, Render (backend), Netlify/Vercel (frontend)

---

## Installation & Setup

### Prerequisites

- Node.js >= 18
- npm or yarn
- MongoDB instance (local or Atlas)
- Docker (optional)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your MongoDB URI and JWT_SECRET
npm run dev
Frontend Setup
bash
Copy code
cd frontend
npm install
cp .env.example .env
npm run dev
Folder Structure
css
Copy code
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── tests/
│   └── app.js
frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── router/
│   └── styles/
API Documentation
Auth
Route	Method	Description	Access
/auth/register	POST	Register a new user	Public
/auth/login	POST	Login user	Public

Projects
Route	Method	Description	Access
/projects	GET	Get all projects	Private
/projects	POST	Create a new project	Private
/projects/:id	GET	Get project by ID	Private

Tasks
Route	Method	Description	Access
/tasks/:projectId	GET	Get tasks for project	Private
/tasks	POST	Create task	Private
/tasks/:id	PUT	Update task	Private
/tasks/:id	DELETE	Delete task	Private

Testing
Backend Tests
bash
Copy code
cd backend
npm test
Frontend e2e Tests (Cypress)
bash
Copy code
cd frontend
npm run test
Deployment
Backend: Deployed on Render / Heroku with environment variables configured

Frontend: Deployed on Netlify / Vercel connecting to backend API

Docker: Use Docker Compose for local development

Accessibility & Responsiveness
Fully responsive layout

Keyboard navigable

Focus outlines and aria attributes included

TailwindCSS used for consistent styling
