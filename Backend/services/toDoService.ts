import {db} from '../db/db'
import { ToDo } from '../models/toDo';
export class ToDoService{


    public static async callDb(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            db.query(query, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }) 
        })
    }

    public static async getToDoList(): Promise<ToDo[]> {
        return this.callDb(`select * from toDoApp.toDos`);
    }

    public static async addToDo(toDoText: number): Promise<any> {      
        return this.callDb(`insert into toDoApp.toDos (text, isFinished) 
        values 
        ("${toDoText}", 0)`)
    }

    public static async finishToDo(toDoId: number): Promise<any> {      
        let isFinished: ToDo = await this.getToDoIsFinished(toDoId);
        let setIsFinished: number;
        isFinished[0].isFinished == 0 ? setIsFinished = 1 : setIsFinished = 0   

        return this.callDb(`update toDoApp.toDos set isFinished = ${setIsFinished} where id = ${toDoId}`);
    }

    public static async deleteToDo(toDoId: number): Promise<any> {      
        return this.callDb(`delete from toDoApp.toDos where id=${toDoId}`);
    }

    public static async getToDoIsFinished(toDoId: number): Promise<ToDo> {
        return this.callDb(`select isFinished from toDoApp.toDos where id=${toDoId}`);
    }
}