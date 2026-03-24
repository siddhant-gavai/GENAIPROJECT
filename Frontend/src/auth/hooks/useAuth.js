import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';

export const useLogin = (onSuccessRedirect = '/') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (email, password) => {
    setError('');
    setLoading(true);
    try {
      const response = await authService.login(email, password);
      if (response.data.token || response.status === 200) {
        const userData = response.data.user || { name: email.split('@')[0], email };
        localStorage.setItem('user', JSON.stringify(userData));
        navigate(onSuccessRedirect);
        return true;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, setError };
};

export const useRegister = (onSuccessRedirect = '/') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = async (username, email, password, confirmPassword) => {
    setError('');
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    setLoading(true);
    try {
      const response = await authService.register(username, email, password);
      if (response.data.token || response.status === 201) {
        const userData = response.data.user || { name: username || email.split('@')[0], email };
        localStorage.setItem('user', JSON.stringify(userData));
        navigate(onSuccessRedirect);
        return true;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, setError };
};
