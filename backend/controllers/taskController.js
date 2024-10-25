const Task = require('../models/Task');
const Joi = require('joi');

const taskSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().optional(),
    priority: Joi.string().valid('low', 'medium', 'high').default('low'),
    dueDate: Joi.date().optional(),
    status: Joi.string().valid('completed', 'incomplete').default('incomplete'),
    assignees: Joi.array().items(Joi.string()).optional() 
});

exports.createTask = async (req, res) => {
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const newTask = new Task({
            ...value,
            createdBy: req.user._id 
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json({ message: "Error creating task" });
    }
};

// 2. Update Task
exports.updateTask = async (req, res) => {
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!updatedTask) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: "Error updating task" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting task" });
    }
};
