import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './css/reset.css'
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import About from './components/about/about';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />, 
    },
    {
        path: "/projects",
        element: <Projects />, 
    },
    {
        path: "/contact",
        element: <Contact />, 
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
reportWebVitals();
