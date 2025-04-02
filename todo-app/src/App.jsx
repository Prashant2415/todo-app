import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Template from './pages/Template'
import Home from './pages/Home'
import InProgress from './pages/InProgress'
import Completed from './pages/Completed'
import { useState } from 'react'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/inProgress",
          element: <InProgress/>
        },
        {
          path: "/completed",
          element: <Completed/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )

}

export default App
