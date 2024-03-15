import axios from 'axios';
const API = axios.create({
    baseURL: 'http://localhost:3031/api'
});

//API.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM API';

export default API;