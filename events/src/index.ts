import express from 'express';
import bodyParser from 'body-parser';
import { queryAPI, commentsAPI, postsAPI } from './utils';

const app = express();

app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  commentsAPI.post('/events', event);
  postsAPI.post('/events', event);
  queryAPI.post('/events', event);

  res.send({ status: 'OK' });
});

app.listen(4005, () => console.log(`Listening on 4005`));
