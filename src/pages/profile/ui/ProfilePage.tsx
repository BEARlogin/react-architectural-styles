import { useAuth } from '@features/auth';
import React from 'react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>Имя пользователя: {user?.username}</p>
      {/* Дополнительная информация о пользователе */}
    </div>
  );
};

export default ProfilePage;