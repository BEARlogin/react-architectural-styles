import { useAuth } from "@features/auth";

export const LogoutButton = () => {
  const { logout, user } = useAuth();
  return user ? (
    <button onClick={logout}>Выход</button>
  ) : (
    <div>Вы вышли из системы</div>
  );
};
