import React from 'react'
import Deposit from "@/app/Vault/Deposit"
import TransactionHistory from './transaction_history'
import VaultActions from './vault_action'
import YieldHistory from './yield_history'

const page = () => {
    return (
      <div>
        <Deposit/>
        <TransactionHistory/>
        <VaultActions/>
        <YieldHistory/>
      </div>
    )
  }
  
  export default page
