import axios from 'axios';
const API = axios.create({
    baseURL: 'http://localhost:3031/api'
});

//
//'https://crowdfunding-weld.vercel.app/api'
//API.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM API';

export default API;