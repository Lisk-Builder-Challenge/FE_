import React from 'react'
import Landingpage1 from "@/app/LandingPage/revisiLP1"
import Landingpage2 from "@/app/LandingPage/revisiLP2"
import Landingpage3 from "@/app/LandingPage/landingpage3"
import Landingpage4 from "@/app/LandingPage/landingpage4"
import Landingpage5 from "@/app/LandingPage/landingpage5"
import Navbar from "@/app/navbar&footer/header"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Landingpage1/>
      <Landingpage2/>
      <Landingpage3/>
      <Landingpage4/>
      <Landingpage5/>
    </div>
  )
}

export default page