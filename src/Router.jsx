import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home  from './pages/Home.jsx'
import About from './pages/About.jsx'


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />
    }
    

])

export default Router;