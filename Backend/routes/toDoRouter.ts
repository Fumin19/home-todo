import express from 'express';
import apiController from '../controllers/toDoController';

const router = express.Router();

router.get('/toDoList', apiController.toDoList);

export { router };
