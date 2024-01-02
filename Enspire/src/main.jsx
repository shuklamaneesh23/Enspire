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
        element:<Home/>
      },
      {
        path:"events",
        element:<Events/>
      },
      {
        path:"gallery",
        element:<Workshop/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
