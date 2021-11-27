import express from 'express';
import fs from 'fs';
import { v4 as randomID } from 'uuid';
const bodyParser = require('body-parser')();

const app = express();

app.use(bodyParser);

const posts: any = {};

app.get('/posts', (req, res) => {
  const posts = fs.readFileSync('posts.json', { encoding: 'utf8' });
  res.send(JSON.parse(posts));
});

app.post('/posts', (req, res) => {
  const id = randomID();
  const { title } = req.body;

  posts[id] = { id, title };

  fs.writeFileSync('posts.json', JSON.stringify(posts));
  res.status(201).send(posts[id]);
});

app.listen(4000, () => console.log(`Listening on 4000`));
