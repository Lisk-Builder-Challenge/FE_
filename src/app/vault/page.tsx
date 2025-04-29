import React from 'react'
import Vault1 from "./vault1"
import Vault2 from "./vault2"
import Vault3 from "./vault3"
import Vault4 from "./vault4"
import NavbarDashboard from "@/app/navbar&footer/navbarDashboard"

const page = () => {
  return (
    <div>
      <NavbarDashboard/>
      <Vault1/>
      <Vault2/>
      <Vault3/>
      <Vault4/>
    </div>
  )
}

export default page
