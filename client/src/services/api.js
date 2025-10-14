import axios from "axios";
import { toast } from 'react-hot-toast';

const instance = axios.create({
    baseURL: "http://localhost:5000/api", // adjust this if your backend runs elsewhere
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor to add auth token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle auth errors
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
            toast.error('Session expired. Please login again.');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;
