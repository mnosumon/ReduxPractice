import React from 'react'
import Navbar from './layout/navbat/Navbar'
import { Outlet } from 'react-router-dom'
import Contact from './pages/contact/Contact'

const RouteLayout = () => {
  return (
    <section>
      <Navbar/>
      <Outlet/>
    </section>
  )
}

export default RouteLayout