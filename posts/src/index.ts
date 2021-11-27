import express from 'express';
import { v4 as randomID } from 'uuid';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const posts: any = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomID();
  const { title } = req.body;

  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => console.log(`Listening on 4000`));
