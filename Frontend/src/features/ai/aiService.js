import axios from 'axios';

const API_URL = 'http://localhost:3000/api/ai';

const startInterview = async (role) => {
  // return await axios.post(`${API_URL}/start`, { role });
  return { data: { success: true, message: "Interview started" } };
};

export const aiService = {
  startInterview
};
