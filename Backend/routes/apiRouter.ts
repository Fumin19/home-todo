import express from 'express';
import apiController from '../controllers/apiController';

var router = express.Router();

router.get('/getToDoList', apiController.getToDoList);

export { router };
