// routes/taskRoutes.js
const express = require('express');
const { auth } = require('../middleware/authMiddleware');
const { createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

// Create, Edit, and Delete Task routes
router.post('/tasks', auth, createTask);         // Create a new task
router.put('/tasks/:id', auth, updateTask);      // Edit a task by ID
router.delete('/tasks/:id', auth, deleteTask);   // Delete a task by ID

module.exports = router;
