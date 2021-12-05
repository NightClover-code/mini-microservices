import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Post } from './utils';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts: Post = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    posts[postId].comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(comment => comment.id === id)!;

    comment.status = status;
    comment.content = content;
  }

  res.send({ status: 'OK' });
});

app.listen(4002, () => console.log(`Listening on 4002`));
