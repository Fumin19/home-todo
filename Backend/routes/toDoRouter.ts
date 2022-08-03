import express from 'express';
import apiController from '../controllers/toDoController';

var router = express.Router();

router.get('/getToDoList', apiController.getToDoList);

export { router };
