import express from 'express';
import { v4 as randomId } from 'uuid';
import bodyParser from 'body-parser';
import cors from 'cors';
import { eventsAPI } from './utils';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId: any = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const id = randomId();
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  const createdComment = { id, content };

  comments.push(createdComment);

  commentsByPostId[req.params.id] = comments;

  await eventsAPI.post('/events', {
    type: 'CommentCreated',
    data: { id, content, postId: req.params.id },
  });

  res.status(201).send(createdComment);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({ status: 'OK' });
});

app.listen(4001, () => console.log(`Listening on 4001`));
