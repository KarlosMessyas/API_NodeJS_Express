const express = require('express');
const tasksController = require('./controllers/taskController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
 tasksMiddleware.validateFielStatus, 
 tasksMiddleware.validateFielStatus, 
 tasksController.updateTask
 );


module.exports = router;