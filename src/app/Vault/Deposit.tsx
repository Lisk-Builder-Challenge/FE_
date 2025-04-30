"use client";

import { useState } from 'react';
//import { Button } from '@/app/Vault/UI/button';

type Token = {
  symbol: string;
  balance: string;
  value: number;
};

export default function DepositInterface() {
  const tokens: Token[] = [
    { symbol: 'USDC', balance: '0.00', value: 0 },
    { symbol: 'USD++', balance: '0.00', value: 0 }
  ];
  
  const [amounts, setAmounts] = useState<Record<string, string>>({
    USDC: '0.00',
    'USD++': '0.00'
  });
  
  const handleInputChange = (token: string, value: string) => {
    setAmounts(prev => ({
      ...prev,
      [token]: value
    }));
  };

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-8">
      <h2 className="text-xl font-bold mb-6">Deposit</h2>
      
      <div className="space-y-4 mb-6">
        {tokens.map((token) => (
          <div key={token.symbol} className="flex justify-between items-center">
            <div className="flex-1">
              <div className="text-lg font-medium">{token.symbol}</div>
              <div className="text-sm text-gray-400">Balance: {token.balance}</div>
            </div>
            
            <div className="flex-1">
              <input
                type="text"
                value={amounts[token.symbol]}
                onChange={(e) => handleInputChange(token.symbol, e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-right text-lg"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium mb-4">Transaction Preview</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Estimated APY</span>
            <span className="font-medium">8.2%</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Network Fee</span>
            <span className="font-medium">-$2.50</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Min. Deposit</span>
            <span className="font-medium">$100</span>
          </div>
        </div>
      </div>
      
{/*<Button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
        Confirm Deposit
      </Button>*/}
    </div>
  );
}