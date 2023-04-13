import { createBrowserRouter, Link } from 'react-router-dom';
import PostsPage from '../pages/PostsPage';

// TODO: implement HomePage and add its routes

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsPage />,
  },
]);
