import { ToDoService } from "../services/toDoService";
import { Request, Response } from 'express';

const toDoList = async (req: Request, res: Response) => {   
    const list = await ToDoService.getToDoList();   
    res.json(list);
}

const finishToDo = async (req: Request, res: Response) => {
    let toDoId: number = req.body.toDoId;
    const status = await ToDoService.finishToDo(toDoId);
    if (status.affectedRows === 1) {
        res.status(200).json({message: "OK"})
    } else {
        res.status(400).json({message: "could not change ToDo's finished status"})
    }
}

const addToDo = async (req: Request, res: Response) => {
    let toDoText: string = req.body.toDoText;
    if (toDoText === null || toDoText === '') {
        res.status(406).json('ToDo text is either null or empty')
    } else {
        const status = await ToDoService.addToDo(toDoText);
        if (status.affectedRows === 1) {       
            res.status(200).json({message: "OK", id: status.insertId})
        } else {
            res.status(400).json({message: "could not add toDo"})
        }
    }
}

const deleteToDo = async (req: Request, res: Response) => {
    let toDoId: number = req.body.toDoId;
    const status = await ToDoService.deleteToDo(toDoId);
    if (status.affectedRows === 1) {       
        res.status(200).json({message: "OK"})
    } else {
        res.status(400).json({message: "could not delete toDo"})
    }
}

export default { toDoList, finishToDo, addToDo, deleteToDo};
