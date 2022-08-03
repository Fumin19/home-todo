import express from 'express';
import { router } from './routes/toDoRouter';
import {db} from './db/db';

const app = express();

// connect to db (mySQL)
db.connect((err: string) => {
    if (err) throw err;
    console.log('Db is connected!')
})

app.use(express.json());

app.use('/', router);

app.listen(process.env.PORT || 3000, () =>
  console.log('App available on http://localhost:3000')
);
