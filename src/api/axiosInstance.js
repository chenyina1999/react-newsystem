import axios from 'axios';
import store from '../redux/store'
// 创建一个 Axios 实例
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // 替换为你的 API 基础 URL
    timeout: 10000, // 请求超时设置
    headers: {
        'Content-Type': 'application/json',
        // 其他自定义头部
    },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么，例如添加 token
        const token = localStorage.getItem('token'); // 从 localStorage 获取 token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // 在这里 true
        store.dispatch({
            type: 'change_loading',
            payload: true
        })
        // const changeCollapsed = () => {
        //     // 改变 state 的 isCollapsed状态
        //     props.changeCollapsed();
        // }

        return config;
    },
    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response) => {
        store.dispatch({
            type: 'change_loading',
            payload: false
        })
        // 对响应数据做些什么
        return response; // 直接返回数据
    },
    (error) => {
        // 处理响应错误
        store.dispatch({
            type: 'change_loading',
            payload: false
        })

        if (error.response) {
            // 服务器响应了状态码，但不在 2xx 范围内
            console.error('Response error:', error.response.data);
        } else if (error.request) {
            // 请求已发出，但没有收到响应
            console.error('Request error:', error.request);
        } else {
            // 其他错误
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;