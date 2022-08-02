import express from 'express';
import { router } from './routes/apiRouter';

const app = express();

//Check db connection

app.use(express.json());

app.use('/', router);

app.listen(process.env.PORT || 3000, () =>
  console.log('App available on http://localhost:3000')
);
