import axios, { AxiosInstance } from 'axios';

const api = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return instance;
};

export default api;
