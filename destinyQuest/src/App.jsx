import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom"
import Footer from './components/Footer'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Play from './routes/Play'
import './App.css'
import "./index.css"
import Navbar from './components/Navbar'

const AppLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/play",
        element: <Play />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
