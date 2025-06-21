import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import MainLayout from '@components/layouts/main-layout'
import PageNotFound from '@pages/page-not-found'
import App from './App'
import './styles/index.css'

const router = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
