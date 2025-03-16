import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api'
});

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  name: string;
}

interface LoginResponse {
  id?: number;
  name?: string;
  email?: string;
  token?: string;
  error?: string;
}

interface RegisterResponse {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  error?: string;
}

export const loginUser = async (loginData: LoginData): Promise<LoginResponse> => {
  try {
    const response = await api.post('/auth/login', loginData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error al iniciar sesión: ${error.message}`);
    } else {
      throw error;
    }
  }
};

export const registerUser = async (registerData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await api.post('/auth/register', registerData);
    const { id, email, password, name } = response.data;
    return { id, email, password, name };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error al registrar usuario: ${error.message}`);
    } else {
      throw error;
    }
  }
};
