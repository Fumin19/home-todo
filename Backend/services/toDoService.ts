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

    public static async finishToDo(toDoId: number): Promise<any> {      
        return new Promise((resolve, reject) => {
            db.query(`update toDoApp.toDos set isFinished = 1 where id = ${toDoId}`, (err, res) => {
                if (err) {
                    console.log("in err");
                    reject(err)
                } else {
                    console.log("in resolve");
                    resolve(res)
                }
            }) 
        })
    }
}