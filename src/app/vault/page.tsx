import React from 'react'
//import Vault1 from "@/app/vault/vault1"
 ///import Vault2 from "@/app/vault/vault2"
 //import Vault3 from "@/app/vault/vault3"
 import Vault4 from "@/app/vault/vault4"
 import Revisi2 from "@/app/vault/revisiVault2"
 import Navbar from "@/app/navbar&footer/navbarDashboard"


const page = () => {
    return (
      <div>
        <Navbar/>
        <Revisi2/>
        {/* <Vault1/> */}
        {/* <Vault3/> */}
        <Vault4/>
      </div>
    )
  }
  
  export default page
