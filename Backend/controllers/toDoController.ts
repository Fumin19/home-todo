import { ToDoService } from "../services/toDoService";
import { Request, Response } from 'express';

const getToDoList = (req: Request, res: Response) => {
    const list = ToDoService.getToDoList();
    console.log(list);
    
    
    // ToDoService.getToDoList()
    //     .then((toDoList) => {
    //         toDoList
    //         ? res.json(toDoList)
    //         : res.status(400).json({ error: 'ToDoList not found' });
    //   })
}

export default { getToDoList};
