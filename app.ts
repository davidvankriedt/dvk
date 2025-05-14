import express, { json, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';

// SETUP

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.get('/', (req: Request, res: Response) => {
});

app.get('/newsletter', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'newsletter.html'));
});

app.post('/subscribe', (req: Request, res: Response) => {
  console.log(req.body.email);
  
  res.send({ "email" : req.body.email });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});