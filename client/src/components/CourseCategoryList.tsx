
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const categories = [
  "dataScience",
  "softwareDevelopment",
  "cloudComputing",
  "internetOfThings",
  "artificialIntelligence"]


const CourseCategoryList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="course-category-list">
      {categories.map((category, index) => (
        <div key={index} className="card clickable" onClick={() => navigate('/CoursesPage', { state: { category: category } })}>
          {t(`categories.titles.${category}`)}
        </div>
      ))}
    </div>
  );
}

export default CourseCategoryList;




