import axios from 'axios';

// const { VITE_CUSTOM_MODE, VITE_API_URL_PROD, VITE_API_URL_DEV } = import.meta.env;

export const axiosInstance = axios.create({
  // baseURL: VITE_CUSTOM_MODE === 'DEV' ? VITE_API_URL_DEV : VITE_API_URL_PROD,
  baseURL:"http://localhost:8080/api/v1/",
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

