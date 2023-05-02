import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../ThemeContext";
import "./style.scss";

const Welcome = () => {
  const { t } = useTranslation();
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`welcome-container ${darkTheme ? "dark-theme" : ""}`}>
      <div className="welcome-content">{t("welcome.title")}</div>
      <div className="welcome-content">{t("welcome.copy1")}</div>
    </div>
  );
};

export default Welcome;
