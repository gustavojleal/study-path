// src/app/routing/Router.tsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/app/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoursesPage from '@/pages/CoursesPage';
import LangueSwitch from '@/components/LangueSwitch';

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
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'courses',
        element: <CoursesPage />
      },
      {
        path: 'langue-switch',
        element: <LangueSwitch />
      }
    ]
  }
]);

export default router;