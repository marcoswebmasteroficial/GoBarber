import axios from 'axios';
//http://192.168.0.186:3333 dispositivo fisico
const api = axios.create({
  baseURL: 'http://192.168.0.186:3333',
});

export default api;
