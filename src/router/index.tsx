import { createBrowserRouter, Link } from 'react-router-dom';
import PostsPage from '../pages/PostsPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';

// TODO: implement HomePage and add its routes

export const router = createBrowserRouter([
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);
