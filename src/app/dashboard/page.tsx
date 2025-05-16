import React from 'react'
import Dashboard1 from '@/app/dashboard/dashboard1'
import Dashboard2 from '@/app/dashboard/dashboard3'
import NavbarDashboard from '@/app/navbar&footer/navbarDashboard'
const page = () => {
  return (
    <>
    <NavbarDashboard/>
    <Dashboard1/>
    <Dashboard2/>
    </>
  )
}

export default page