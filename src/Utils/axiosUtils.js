import axios from 'axios';

let api = axios.create({ baseURL: 'https://elasticsearch-backend.netlify.app/api/'});

export default api;