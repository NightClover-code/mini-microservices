import axios from 'axios';

export const postsAPI = axios.create({
  baseURL: 'http://localhost:4000',
});
