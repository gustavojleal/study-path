// src/app/routing/Router.tsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/app/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoursesPage from '@/pages/CoursesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'homepage',
        element: <HomePage />
      },
      {
        path: 'aboutpage',
        element: <AboutPage />
      },
      {
        path: 'coursespage',
        element: <CoursesPage />
      },

    ]
  }
]);

export default router;