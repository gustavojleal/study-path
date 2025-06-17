import React from 'react';
import { useTranslation } from 'react-i18next';
import CourseCategoryList from '../components/CourseCategoryList';


const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="main">
      <h1>{t("welcome")}</h1>
      < CourseCategoryList />
    </div>
  );
}
export default HomePage;