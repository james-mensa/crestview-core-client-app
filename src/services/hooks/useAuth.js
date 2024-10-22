import { useEffect, useState } from 'react';
import api from './api';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.post('/refresh-token', {}, { withCredentials: true });
        localStorage.setItem('accessToken', data.accessToken);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated };
};

export default useAuth;
