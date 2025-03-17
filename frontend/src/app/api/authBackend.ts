import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/auth'
});

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  name: string;
}

interface LoginResponse {
  id: number | null;
  name: string | null;
  email: string | null;
  token: string | null;
  error: string | null;
}

interface RegisterResponse {
  id: number | null;
  email: string | null;
  name: string | null;
  error: string | null;
}

export const loginUser = async (loginData: LoginData): Promise<LoginResponse> => {
  try {
    const response = await api.post('/login', loginData);
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
    const response = await api.post('/register', registerData);
    const { id, email, name, error } = response.data;
    return { id, email, name, error };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error al registrar usuario: ${error.message}`);
    } else {
      throw error;
    }
  }
};
