
import { AuthPage, RegisterPage } from '@pages/auth';
import { LandingPage } from '@pages/landing';
import { Routes, Route, Navigate } from 'react-router-dom';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Если маршрут не найден, перенаправляем на главную страницу */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRouter;