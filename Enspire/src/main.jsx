import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Layout from './layout.jsx';
import Home from './components/home.jsx';
import Events from './components/events.jsx';
import Workshop from './components/speaker.jsx';
import Landing from './components/landingPage.jsx';
import Sponsers from './components/sponsors.jsx';
import Team from './components/team.jsx';
import Contact from './components/contact.jsx';
import About from './components/about.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Landing/>
      },
      {
        path:"home",
        element:<Landing/>
      },
      {
        path:"events",
        element:<Events/>
      },
      {
        path:"sponsors",
        element:<Sponsers/>
      },
      {
        path:"teams",
        element:<Team/>
      },
      {
        path:"gallery",
        element:<Workshop/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
