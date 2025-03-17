import React from 'react';

interface UserProfileCardProps {
  id: number;
  nickname: string;
  name: string;
  email: string;
  profileImage: string; // URL de la imagen de perfil
}

export const ProfileCard = ({ id, nickname, name, email, profileImage }: UserProfileCardProps) => (
    <div className="flex flex-col md:flex-row md:items-center bg-white rounded-lg shadow-md p-4">
      <img
        src={profileImage}
        alt="Imagen de perfil"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto md:mx-0 md:mr-4"
      />
      <div className="md:ml-4 text-left">
        <p className="text-gray-600">ID: {id}</p>
        <h2 className="text-gray-600 text-md font-bold">Name: {name}</h2>
        <p className="text-gray-600">Nickname: {nickname}</p>
        <p className="text-gray-600">Email: {email}</p>
      </div>
    </div>
);
