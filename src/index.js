import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';
import NewNotice from './pages/NewNotice';
import NoticeDetail from './pages/NoticeDetail';
import NoticeBoard from './pages/NoticeBoard';
import UpdateNotice from './pages/UpdateNotice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/notice',
        element: (
          <NoticeBoard />
        ),
      },
      {
        path: '/notice/new',
        element: (
          <ProtectedRoute>
            <NewNotice />
          </ProtectedRoute>
        ),
      },
      {
        path: '/notice/update/:id',
        element: (
          <ProtectedRoute>
            <UpdateNotice />
          </ProtectedRoute>
        ),
      },
      {
        path: '/notice/:id',
        element: (
          <NoticeDetail />
        ),
      },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
