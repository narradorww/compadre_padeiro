import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '../../ThemeContext'
import logoDark from "../../assets/img/CP-preto.png";
import logoLight from "../../assets/img/CP-branco.png";
import emailIcon from "../../assets/img/CP-email.png";
import googleIcon from "../../assets/img/loginGoogle.png";
import facebookIcon from "../../assets/img/loginFacebook.png";
import './style.scss'



const Authenticator = () => {
    const { t } = useTranslation();
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`authenticator ${darkTheme ? "dark-theme" : "light-theme"}`} >
        <img
          src={darkTheme ? logoLight : logoDark}
          alt="Compadre Padeiro"
          className="logo"
        />
        <div className="title" >{t('authenticator.cta')}</div>
        <div className="auth-options">
          <Link to="/login" className="auth-option">
          <div>        <img
          src={emailIcon}
          alt="email login"
          className="icon"
        />{t('authenticator.login')}</div>
          </Link>
          <Link to="/login" className="auth-option">
          <div>
          <img
          src={googleIcon}
          alt="google login"
          className="icon"
        />{t('authenticator.loginGoogle')}</div>
          </Link>
          <Link to="/login" className="auth-option">
          <div>
          <img
          src={facebookIcon}
          alt="facebook login"
          className="icon"
        />{t('authenticator.loginFacebook')}</div>
          </Link>
          <Link to="/register" className="auth-option">
          <div>
          {t('authenticator.register')}</div>
          </Link>
        </div>
            
        </div>
    )
}

export default Authenticator