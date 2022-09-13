import axios from 'axios';
import { getUserLocalStorage } from '../context/AuthProvider/util';

export const api = axios.create({
  baseURL: 'https://reqres.in/api/',
});

axios.interceptors.request.use(
  function (config) {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;
  },
  function (error) {
    return Promise.reject(error);
  }
);
