const express = require('express');
const router = express.Router();

const tasks = [];

router.post('/tasks', (req, res) => {
    const { task, columnId } = req.body;

    if (!task || !columnId) {
        return res.status(400).json({ error: 'Task and columnId are required' });
    }

    tasks.push(task);
    res.status(201).json({ message: 'Task added successfully', task });
});

module.exports = router;
