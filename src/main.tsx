import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.tsx';
import User from './routes/User.tsx';
import ErrorPage from './components/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/user/:id",
    element: <User />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
