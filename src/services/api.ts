import axios from 'axios';

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: 'http://www.omdbapi.com',
});

export default api;
