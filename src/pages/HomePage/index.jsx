import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import logoDark from "../../assets/img/CP-preto.png";
import logoLight from "../../assets/img/CP-branco.png";
import "./style.scss";

const HomePage = () => {
  const { t } = useTranslation();
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`home-page${darkTheme ? " dark-theme" : " light-theme"}`}>
        <img
          src={darkTheme ? logoLight : logoDark}
          alt="Compadre Padeiro"
          className="logo"
        />
        <div className="title">{t('homePage.title')}</div>
        <div className="auth-options">
          <Link to="/login" className="auth-option">
          <div>{t('homePage.login')}</div>
          </Link>
          <Link to="/register" className="auth-option">
          <div>{t('homePage.register')}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
