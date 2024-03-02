import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componets/Home'
import Portfolio from './pages/portfolio'
import Contact from './pages/Contact'



const App = () => {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
        {
      path:"/Portfolio",
      element:<Portfolio/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    }
  ])
  return(
    <RouterProvider router={router}/>

  )
}

export default App