

import axios from "axios";
// Create an Axios instance
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8082',
    headers: {
        'Content-Type': 'application/json',
    },
});