import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { handleEvent, Posts } from './utils';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts: Posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvent(type as string, data, posts);

  res.send({ status: 'OK' });
});

app.listen(4002, () => console.log(`Listening on 4002`));
