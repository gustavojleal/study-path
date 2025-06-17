import React from 'react';
import { useTranslation } from 'react-i18next';
import data from './courses.json';


const CoursesList = ({ courseCategory = "" }) => {
  const { t } = useTranslation();
  const courses = courseCategory === "" ? data.data : data.data.filter(course => course.categories.some(category => category.name === courseCategory));


  return (
    <div className="course-category-list">
      {courses.map((course, idx) => (
        <div key={idx} className="card clickable">
          {t(`courses.title.${course.course}`)}
          <div className="description">

            {t(`courses.description.${course.course}`)}
          </div>
        </div>
      ))}

    </div>
  );
};

export default CoursesList;