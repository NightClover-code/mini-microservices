import express from 'express';
import bodyParser from 'body-parser';
import { eventsAPI } from './utils';

const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  const { content, id, postId } = data;

  if (type === 'CommentCreated') {
    const status = content.includes('orange') ? 'rejected' : 'approved';

    await eventsAPI.post('/events', {
      type: 'CommentModerated',
      data: { id, content, status, postId },
    });
  }

  res.send({ status: 'OK' });
});

app.listen(4003, () => console.log(`Listening on 4003`));
