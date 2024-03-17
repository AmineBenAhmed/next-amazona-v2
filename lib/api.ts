import axios from 'axios';
const API = axios.create({
    baseURL: 'https://crowdfunding-adf63qezk-amine-ben-ahmeds-projects.vercel.app/api'
});

//API.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM API';

export default API;