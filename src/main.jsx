import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { About } from './pages/About.jsx'
import { Preview } from './pages/Preview.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    elemet: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
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

  }
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
