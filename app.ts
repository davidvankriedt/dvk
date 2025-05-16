import express, { json, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import { sequelize, connectToDatabase } from './db';
import { Subscriber } from './models/Subscriber';
import { PORT } from './config';

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

app.post('/subscribe', async (req: Request, res: Response) => {
  const newSub = await Subscriber.create({ email: req.body.email });
  const subscribers = await Subscriber.findAll();
  
  console.log('Subscribers: ', JSON.stringify(subscribers, null, 2));

});

async function start() {
  await connectToDatabase();

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  });
}

start();

