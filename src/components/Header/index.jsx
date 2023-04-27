import React, { useContext} from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './../LanguageSelector';
import ThemeToggle from './../ThemeToggle';
import { ThemeContext } from './../../ThemeContext';
import logoDark from "../../assets/img/CP-preto.png";
import logoLight from "../../assets/img/CP-branco.png";
import './style.scss';

const Header = () => {
  const { t } = useTranslation();
  const { darkTheme } = useContext(ThemeContext);

  return (
    <header className={`header${darkTheme ? " dark-theme" : " light-theme"}`}>
          <img
          src={darkTheme ? logoLight : logoDark}
          alt="Compadre Padeiro"
          className="logo"
        />
      <div>{t('header.title')}</div>
      <div className="header__right">
        <LanguageSelector />
        <ThemeToggle darkTheme={darkTheme} />
      </div>
    </header>
  );
};

export default Header;
