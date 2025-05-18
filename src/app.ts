import express, { json, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import { sequelize, connectToDatabase } from './db';
import { Subscriber } from './models/Subscriber';
import { PORT } from './config';

// SETUP

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// ROUTES

app.post('/subscribeNewsletter', async (req: Request, res: Response) => {
  const newSub = await Subscriber.create({ email: req.body.email });
  const subscribers = await Subscriber.findAll();
  console.log('NEW SUBSCRIBER');
});

async function start() {
  await connectToDatabase();

  app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  });
}

start();

