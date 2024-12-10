import axios from 'axios';
const ACCESS_TOKEN_LOCAL="bk_access_token";

console.log({accessTokensss:process.env.REACT_APP_BACKEND_URL})
const BaseApi = axios.create({
  baseURL:  process.env.REACT_APP_BACKEND_URL,
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
