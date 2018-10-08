import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://shibe.online/api/',
  timeout: 2000,
});

export default instance;
