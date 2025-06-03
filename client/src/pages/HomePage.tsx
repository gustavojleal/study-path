import React from 'react';
import { useTranslation } from 'react-i18next';


const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="main">
      <h1>{t("welcome")}</h1>
      <p>{t("text")}</p>
    </div>
  );
}
export default HomePage;