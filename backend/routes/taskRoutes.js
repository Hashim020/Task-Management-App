const express = require('express');
const { auth } = require('../middleware/authMiddleware');
const { createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/tasks', auth, createTask);         
router.put('/tasks/:id', auth, updateTask);      
router.delete('/tasks/:id', auth, deleteTask);   

module.exports = router;
