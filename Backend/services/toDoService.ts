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
        let isFinished: ToDo = await this.getToDoIsFinished(toDoId);
        let setIsFinished: number;
        isFinished[0].isFinished == 0 ? setIsFinished = 1 : setIsFinished = 0   
        
        // toDo.isFinished === 0 ? setIsFinished = 1 : setIsFinished = 0
        // console.log(`is setFinished ${setIsFinished}`);

        return new Promise((resolve, reject) => {
            db.query(`update toDoApp.toDos set isFinished = ${setIsFinished} where id = ${toDoId}`, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }) 
        })
    }

    public static async addToDo(toDoText: number): Promise<any> {      
        return new Promise((resolve, reject) => {
            db.query(`insert into toDoApp.toDos (text, isFinished) 
            values 
            ("${toDoText}", 0)`
            , (err, res) => {
                if (err) {
                    reject(err)
                } else {                   
                    resolve(res)
                }
            })
        })
    }

    public static async deleteToDo(toDoId: number): Promise<any> {      
        return new Promise((resolve, reject) => {
        
            db.query(`delete from toDoApp.toDos where id=${toDoId}`, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }) 
        })
    }

    public static async getToDoIsFinished(toDoId: number): Promise<ToDo> {
        return new Promise((resolve, reject) => {
        
            db.query(`select isFinished from toDoApp.toDos where id=${toDoId}`, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            }) 
        })
    }
}