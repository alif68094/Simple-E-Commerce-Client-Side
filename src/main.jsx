import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Register from './pages/Register/Register';
import Login from './pages/LogIn/LogIn';
import AuthProvider from './Hooks/AuthProvider';
import AddProduct from './pages/AddProduct/AddProduct';
import MyCart from './pages/MyCart/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
