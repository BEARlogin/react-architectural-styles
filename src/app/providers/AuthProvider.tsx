import React, { useState, useEffect } from 'react';
import { AuthContext } from '@features/auth/model/context';
import { User } from '@features/auth/model/types';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (username: string, password: string) => {
    // Здесь вы можете сделать запрос к API для аутентификации
    // Для простоты создадим фейкового пользователя
    const fakeUser: User = {
      id: 1,
      username,
      token: 'fake-jwt-token',
    };
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (username: string, password: string) => {
    await login(username, password);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      { children}
    </AuthContext.Provider>
  );
};