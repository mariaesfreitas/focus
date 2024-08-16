import axios from 'axios';

const api = axios.create({
  baseURL: 'https://focus-1ddy.onrender.com',
});

export default api;
