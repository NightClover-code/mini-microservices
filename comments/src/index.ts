import express from 'express';
import { v4 as randomId } from 'uuid';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId: any = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const id = randomId();
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  const createdComment = { id, content };

  comments.push(createdComment);

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(createdComment);
});

app.listen(4001, () => console.log(`Listening on 4001`));
