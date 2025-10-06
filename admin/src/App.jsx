import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './pages/Dashboard/Index'
import Header from './Components/Header/Index'
const App = () => {
    const router = createBrowserRouter([
        {
            path: "/", 
            exact: true,
            element: (<>
            
            <section className='main '>
                <Header/>
            </section>
            
            </>)
        }
    ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
