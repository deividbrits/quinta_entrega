import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'
import { Preview } from './pages/Preview.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path:'/preview',
        element: <Preview />
      }
    ],

  
  
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
