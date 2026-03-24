import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

axios.defaults.withCredentials = true;

const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
};

const register = async (username, email, password) => {
  return await axios.post(`${API_URL}/register`, { username, email, password });
};

export const authService = {
  login,
  register,
};
