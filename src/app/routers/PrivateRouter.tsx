import { LogoutButton } from "@features/auth";
import { HomePage } from "@pages/home";
import { ProfilePage } from "@pages/profile";
import { Routes, Route, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  return (
    <>
      <LogoutButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Если маршрут не найден, перенаправляем на домашнюю страницу */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default PrivateRouter;
