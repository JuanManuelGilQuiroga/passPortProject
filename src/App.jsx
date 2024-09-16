import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css';
import {LogIn} from './components/logIn';
import { Profile } from './components/profile';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Bienvenido a cineCampus</h1>
  },
  {
      path: "/login",
      element: <LogIn/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  }

])

export function App() {
  return (
    <RouterProvider router={routes}/>
  );
}