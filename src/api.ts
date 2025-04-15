// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/discord'; // URL твоего бэкенда

export const guild = async () => {
  try {
    const response = await axios.get(`${API_URL}/guild/532331179760812033`);
    return response.data;
  } catch (error) {
    console.error('Error fetching member count:', error);
    throw error; // Пробрасываем ошибку дальше
  }
};


export const user = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching member count:', error);
    throw error; // Пробрасываем ошибку дальше
  }
};