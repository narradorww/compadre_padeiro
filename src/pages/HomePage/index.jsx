import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import Authenticator from "../../components/Authenticator";
import "./style.scss";

const HomePage = () => {
  const { t } = useTranslation();
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`home-page${darkTheme ? " dark-theme" : " light-theme"}`}>
        <div className="authenticator-container">
    <Authenticator />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
