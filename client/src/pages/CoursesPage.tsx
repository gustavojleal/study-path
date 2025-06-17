import React from 'react';
import { useLocation } from 'react-router-dom';
import CoursesList from '../components/CoursesList';

const CoursesPage = (courseCategory: string) => {
  const location = useLocation();
  const category = (location.state as { category?: string })?.category;
  return (
    <div className="main">
      <h1>{"Cursos"}</h1>
      <CoursesList courseCategory={category} />

    </div>
  );
}
export default CoursesPage;