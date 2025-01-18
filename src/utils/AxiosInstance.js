import axios from "axios";

// Create an Axios instance
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
