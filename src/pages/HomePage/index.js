import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logoDark from '../../assets/img/CP-preto.png';
import logoLight from '../../assets/img/CP-branco.png';
import ThemeContext from '../../ThemeContext';

const HomePage = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`home-page${darkTheme ? ' dark-theme' : ' light-theme'}`}>
      <button className="toggle-theme" onClick={toggleTheme}>
        {darkTheme ? 'Tema Claro' : 'Tema Noturno'}
      </button>
      <img src={darkTheme ? logoLight : logoDark} alt="Compadre Padeiro" className="logo" />
      <h1 className="title">Compadre Padeiro</h1>
      <div className="auth-options">
        <Link to="/login" className="auth-option">
          Login
        </Link>
        <Link to="/register" className="auth-option">
          Registro
        </Link>
      </div>
    </div>
  );
};
export default HomePage;

