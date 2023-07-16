import axios from 'axios';

// const { VITE_CUSTOM_MODE, VITE_API_URL_PROD, VITE_API_URL_DEV } = import.meta.env;

export const axiosInstance = axios.create({
  // baseURL: VITE_CUSTOM_MODE === 'DEV' ? VITE_API_URL_DEV : VITE_API_URL_PROD,
  baseURL:"https://api.spacexdata.com/v3/",
  headers: {
    'Content-Type': 'application/json',
  },
});

