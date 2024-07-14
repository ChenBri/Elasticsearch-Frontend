import axios from 'axios';

let api = axios.create({ baseURL: 'https://elasticsearch-backend.netlify.app/api/'});
/* let api = axios.create({ baseURL: 'http://127.0.0.1:5000/'});
 */
export default api;