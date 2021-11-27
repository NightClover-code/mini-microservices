import express from 'express';
import { v4 as randomID } from 'uuid';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/posts/:id/comments', (req, res) => {});

app.post('/posts/:id/comments', (req, res) => {});

app.listen(4001, () => console.log(`Listening on 4001`));
