import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Добро пожаловать в Task Tracker</h1>
      <p>Пожалуйста, <Link to="/auth">войдите</Link> или <Link to="/register">зарегистрируйтесь</Link>, чтобы продолжить.</p>
    </div>
  );
};

export default LandingPage;