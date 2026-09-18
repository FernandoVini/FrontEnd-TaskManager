import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:8080',
});

service.interceptors.request.use(config => {
    const token = localStorage.getItem('@TaskManager:token');

    if (token && !config.url.startsWith('/auth/')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

export default service;