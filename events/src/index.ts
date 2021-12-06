import express from 'express';
import bodyParser from 'body-parser';
import { queryAPI, commentsAPI, postsAPI, moderationAPI, Event } from './utils';

const app = express();

app.use(bodyParser.json());

const events: Event[] = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  postsAPI.post('/events', event);
  queryAPI.post('/events', event);
  moderationAPI.post('/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log(`Listening on 4005`));
