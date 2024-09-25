import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import './Login.css';
import {LogIn} from './components/logIn';
import { Profile, productsLoader, productsAction } from './components/profile';
import { Register, registerAction } from './components/register';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login"  />
  },
  {
    path: "/login",
    element: <LogIn/>,
  },
  {
    path: "/register",
    element: <Register/>,
    action: registerAction
  },
  {
    path: "/profile",
    element: <Profile/>,
    loader: productsLoader,
    action: productsAction
  }

])

export function App() {
  return (
    <RouterProvider router={routes}/>

  );
}