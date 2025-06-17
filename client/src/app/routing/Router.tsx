// src/app/routing/Router.tsx
import { createBrowserRouter, useLocation } from 'react-router-dom';
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
        path: '/Coursespage',
        element: <CoursesPage />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const state = url.state || "";
          return { category: state.category || "" }; // Retorna a categoria ou uma string vazia
        }
      },

    ]
  }
]);

export default router;