import express, { json, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';

// SETUP

const app = express();

const port = 3000;

app.use(json());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.get('/', (req: Request, res: Response) => {

});

app.get('/newsletter', (req: Request, res: Response) => {

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});