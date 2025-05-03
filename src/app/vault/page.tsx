import React from 'react'
import Vault1 from "@/app/Vault/vault1"
 ///import Vault2 from "@/app/vault/vault2"
 import Vault3 from "@/app/Vault/vault3"
 import Vault4 from "@/app/Vault/vault4"
 import Navbar from "@/app/navbar&footer/navbarDashboard"

const page = () => {
    return (
      <div>
        <Navbar/>
       <Vault1/>
       <Vault3/>
       <Vault4/>
      </div>
    )
  }
  
  export default page
