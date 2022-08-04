import express from 'express';
import toDoController from '../controllers/toDoController';

const router = express.Router();

router.get('/toDoList', toDoController.toDoList);

export { router };
