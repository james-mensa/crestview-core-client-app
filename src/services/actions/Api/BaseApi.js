import axios from 'axios';
import { API } from '../../type';

const ACCESS_TOKEN_LOCAL="bk_access_token";
const REFRESH_TOKEN_LOCAL="bk_refresh_token";

// Create an instance of axios with the backend URL
const BaseApi = axios.create({
  baseURL: API, // Your backend URL
});

// Request interceptor to add the access token to headers
BaseApi.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_LOCAL);
    console.log({accessToken})
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log({BaseApiConfig:config.headers.Authorization})
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // Response interceptor to handle refresh token logic
// BaseApi.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Check if the response status is 401 (Unauthorized)
//     // and if the request has not been retried yet
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // Attempt to refresh the access token using the refresh token
//         const { data } = await axios.post(`${API}/refresh-token`, {}, { withCredentials: true });
//         // Store the new access token and update the headers
//         localStorage.setItem(ACCESS_TOKEN_LOCAL, data.accessToken);
//         BaseApi.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

//         // Retry the original request with the new access token
//         return BaseApi(originalRequest);
//       } catch (e) {
//         console.error('Failed to refresh token', e);

//         // If refreshing fails (e.g., refresh token expired), log the user out
//         localStorage.removeItem(ACCESS_TOKEN_LOCAL);
//         localStorage.removeItem(REFRESH_TOKEN_LOCAL); // Remove refresh token if stored locally
//         // window.location.href = '/'; // Redirect to the login page
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default BaseApi;
