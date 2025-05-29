import axios from 'axios';

// const apiUrl = 'http://localhost:3001/api/v1/crud';
const apiUrl = 'http://158.179.167.148:3001/api/v1';

export const instance = axios.create({
    baseURL: apiUrl,
    // headers: { 'Content-Type': 'application/json' },
    // withCredentials: true,
});

instance.interceptors.response.use(
    response => response,
    error => {
        // 공통 에러 처리
        return Promise.reject(error);
    }
);

// JWT 설정
/* instance.interceptors.request.use(
    (config) => {
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `JWT ${localStorage.getItem('token')}`;
        }
        return config;
    },
    (error) => {}
); */