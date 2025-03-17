import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/profile'
});

interface ProfileResponse {
    id: number;
    nickname: string;
    profileImage: string;
}

export const getProfileData = async (token: string): Promise<ProfileResponse | null> => {
    try {
        const response = await api.get('/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('******************************* Response data', response);
        return response.data.profile;
    } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(`Error al iniciar sesión: ${error.message}`);
        } else {
          throw error;
        }
      }
};
