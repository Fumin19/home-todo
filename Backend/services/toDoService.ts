import {db} from '../db/db'
import { ToDo } from '../models/toDo';
export class ToDoService{
    public static async getToDoList(): Promise<ToDo[]> {
        let toDos: Promise<ToDo[]>; 
        db.query(`select * from toDoAppDatabase.toDos`, (err, res) => {
            if (err) {
                console.log(`error: ${err}`);
                return toDos;
            } else {
                return res;
            }
        }) 
        return toDos;
    }
}