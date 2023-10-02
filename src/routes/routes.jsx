import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/home/home/Home'
import PropertyDetails from '../pages/property/PropertyDetails'
import Property from '../pages/property/Property'
import PropertyDataLoad from '../pages/property/PropertyDataLoad'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"property",
        element:<PropertyDataLoad></PropertyDataLoad>,
      },
      {
        path:"property/:id",
        element:<PropertyDetails></PropertyDetails>,
        loader:({params})=>fetch("propertyData.json")
      }
    ]
  }
])

export default routes