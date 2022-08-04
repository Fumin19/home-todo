import { ToDoService } from "../services/toDoService";
import { Request, Response } from 'express';

const toDoList = async (req: Request, res: Response) => {
    const list = await ToDoService.getToDoList();
    res.json(list);
}

export default { toDoList};
