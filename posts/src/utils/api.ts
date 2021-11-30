import axios from 'axios';

export const eventsAPI = axios.create({
  baseURL: 'http://localhost:4005',
});
