# Task Management App

A scalable backend application for managing tasks, built with Node.js, Express, and MongoDB. This app allows users to create, edit, and delete tasks with detailed metadata, manage task assignments, and utilize role-based access for different user roles.

## Features

- **User Authentication**: Sign up and log in with role-based access control.
- **Task Management**: Create, edit, delete, and assign tasks with detailed metadata, including:
  - Task status (completed/incomplete)
  - Priority (low, medium, high)
  - Due date and assignees
- **Real-Time Updates**: Notifications for task changes.
- **Task Filtering**: Filter tasks based on completion status, priority, and assignees.
- **Pagination & Search**: Efficiently handle large datasets with pagination and search.
- **Security**: JWT authentication, bcrypt for password hashing, and input validation with Joi.
- **Scalability**: Designed with a modular architecture to support future feature expansions.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **Validation**: Joi
- **Real-Time**: WebSockets (for notifications)
  
## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Install dependencies**

   Navigate to the backend directory and install dependencies using npm:

   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` folder and set up the following environment variables:

   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server**

   Start the development server:

   ```bash
   nodemon server.js
   ```

   Or, if you're using nodemon (installed globally), you can use:

   ```bash
   nodemon
   ```

5. **Access the API**

   The API will be available at `http://localhost:5000`.

## Usage

### API Endpoints

1. **User Authentication**
   - **POST** `signup` - Sign up a new user
   - **POST** `login` - Log in with username and password



## Project Structure

- `backend/`
  - `controllers/` - Contains controller functions for handling API requests
  - `models/` - Mongoose schemas for database entities
  - `routes/` - Defines API routes
  - `middleware/` - Authentication and role-based access control
  - `config/` - Database configuration
  - `server.js` - Main application entry point

