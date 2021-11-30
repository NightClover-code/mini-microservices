import express from 'express';
import { v4 as randomId } from 'uuid';
import bodyParser from 'body-parser';
import cors from 'cors';
import { eventsAPI } from './utils';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts: any = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomId();
  const { title } = req.body;

  posts[id] = { id, title };

  await eventsAPI.post('/events', {
    type: 'PostCreated',
    data: { id, title },
  });

  res.status(201).send(posts[id]);
});

app.listen(4000, () => console.log(`Listening on 4000`));
