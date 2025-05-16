"use client";

import { Button } from '@/app/vault/UI/button';

export default function VaultActions() {
  return (
    <div className="flex gap-4 mb-8">
      <Button 
        className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-md px-6 py-2"
      >
        Deposit
      </Button>
      <Button 
        variant="outline" 
        className="border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 rounded-md px-6 py-2"
      >
        Withdraw
      </Button>
      <Button 
        variant="outline" 
        className="border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 rounded-md px-6 py-2"
      >
        Restake
      </Button>
    </div>
  );
}