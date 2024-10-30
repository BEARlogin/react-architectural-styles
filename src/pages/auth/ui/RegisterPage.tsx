import { LoginForm, RegisterForm } from "@features/auth";
import {Link} from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <RegisterForm />
      <div> <Link to="/auth">войти</Link> </div>
    </div>
  );
};

export default AuthPage;
