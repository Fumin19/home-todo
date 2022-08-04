import {db} from '../db/db'
import { ToDo } from '../models/toDo';
export class ToDoService{
    public static async getToDoList(): Promise<ToDo[]> {
        return new Promise((resolve, reject) => {
            db.query(`select * from toDoApp.toDos`, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }) 
        })
    }
}