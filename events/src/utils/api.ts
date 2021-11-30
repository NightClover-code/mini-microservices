import axios from 'axios';

export const postsAPI = axios.create({
  baseURL: 'http://localhost:4000',
});

export const commentsAPI = axios.create({
  baseURL: 'http://localhost:4001',
});

export const queryAPI = axios.create({
  baseURL: 'http://localhost:4002',
});
