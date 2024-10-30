import { LoginForm, RegisterForm } from "@features/auth";
import {Link} from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <h1>Авторизация</h1>
      <LoginForm />
      <div> <Link to="/register">регистрация</Link> </div>
    </div>
  );
};

export default AuthPage;
