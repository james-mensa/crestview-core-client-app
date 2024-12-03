import axios from 'axios';
import { API } from '../../config/constants';
const ACCESS_TOKEN_LOCAL="bk_access_token";
const BaseApi = axios.create({
  baseURL: API,
  withCredentials: true, 
});

BaseApi.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default BaseApi;
