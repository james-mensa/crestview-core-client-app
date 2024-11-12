import axios from 'axios';
import { API } from '../../../config/constants';

const ACCESS_TOKEN_LOCAL="bk_access_token";
const REFRESH_TOKEN_LOCAL="bk_refresh_token";

const AuthApi = axios.create({
  baseURL: API,
  withCredentials: true,
});

// Request interceptor to add the access token to headers
AuthApi.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL);
    console.log({accessToken})
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log({AuthApiConfig:config.headers.Authorization})
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle refresh token logic
AuthApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the response status is 401 (Unauthorized)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post(`${API}/refresh-token`, {}, { withCredentials: true });
        // Store the new access token and update the headers
        localStorage.setItem(ACCESS_TOKEN_LOCAL, data.accessToken);
        AuthApi.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

        return AuthApi(originalRequest);
      } catch (e) {
        console.error('Failed to refresh token', e);

        // If refreshing fails (e.g., refresh token expired), log the user out
        localStorage.removeItem(ACCESS_TOKEN_LOCAL);
        localStorage.removeItem(REFRESH_TOKEN_LOCAL);

      }
    }

    return Promise.reject(error);
  }
);

export default AuthApi;
