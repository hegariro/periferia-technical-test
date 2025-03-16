import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api'
});

interface UserData {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (userData: UserData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error al registrar usuario: ${error.message}`);
    } else {
      throw error;
    }
  }
};
