import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getProfileData } from '../app/api/profileBackend';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ProfileCard } from '../components/Card/ProfileCard';
import { resetForm as resetAuthStorage } from '../features/auth/authSlice';
import { setNickname, setProfileImage } from '../features/profile/profileSlice';
import { selectNickname, selectProfileImage } from '../features/profile/profileSelectors';
import { selectName, selectEmail, selectUserId, selectToken } from '../features/auth/authSelectors';

export const ProfilePage = () => {
    const dispatch = useAppDispatch();

    const token = useAppSelector(selectToken);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
          try {
            const response = await getProfileData(token);
            if (response) {
                const { nickname, profileImage } = response;
                dispatch(setNickname(nickname));
                dispatch(setProfileImage(profileImage));
                if (!nickname || !profileImage) {
                    dispatch(resetAuthStorage());
                    const navigate = useNavigate();
                    navigate('/', { replace: true });
                }
            }
          } catch (error) {
            console.error('Error al cargar datos de perfil:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProfileData();
    }, []);

    const id = useAppSelector(selectUserId) || 0;
    const name = useAppSelector(selectName) || '';
    const email = useAppSelector(selectEmail) || '';
    const nickname = useAppSelector(selectNickname) || '';
    const profileImage = useAppSelector(selectProfileImage) || '';

    const props = { id, name, email, nickname, profileImage };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2 className="flex flex-col text-left">
                {name} 
                <small className="text-gray-400 text-md mt-1"> Perfil de usuario</small>
            </h2>
            <div className="max-w-md mx-auto mt-10">
                <ProfileCard {...props} />
            </div>
        </div>
    );
};