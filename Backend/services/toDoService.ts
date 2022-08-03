import {db} from '../db/db'
import { ToDo } from '../models/toDo';
export class ToDoService{
    public static async getToDoList(): Promise<ToDo[]> {
        return new Promise((resolve, reject) => {
            db.query(`select * from toDoAppDatabase.toDos`, (err, res) => {
                if (err) {
                    reject('Could not retrieve toDo list from database')
                } else {
                    resolve(res)
                }
            }) 
        })
    }
}