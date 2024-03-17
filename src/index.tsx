import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorPage from './error-page'

const rootElement = document.getElementById('root')

const rootInstance = createRoot(rootElement as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  }
])

rootInstance.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
