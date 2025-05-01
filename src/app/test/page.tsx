import React from 'react'
import Deposit from "@/app/vault/Deposit"
import TransactionHistory from '@/app/vault/transaction_history'
import VaultActions from '@/app/vault/vault_action'
import YieldHistory from '@/app/vault/yield_history'
import Navbar from "@/app/navbar&footer/navbarDashboard"

const page = () => {
  return (
    <div>
        <Navbar/>
        <Deposit/>
        <TransactionHistory/>
        <VaultActions/>
        <YieldHistory/>
    </div>
  )
}

export default page