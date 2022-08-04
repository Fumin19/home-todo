import express from 'express';
import toDoController from '../controllers/toDoController';

const router = express.Router();

router.get('/toDoList', toDoController.toDoList);
router.post('/finishToDo', toDoController.finishToDo);
router.post('/addToDo', toDoController.addToDo);

export { router };
