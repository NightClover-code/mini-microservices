import axios from 'axios';

export const clientAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

export const commentsAPI = axios.create({
  baseURL: 'http://localhost:4001',
});

export const postsAPI = axios.create({
  baseURL: 'http://localhost:4000',
});
