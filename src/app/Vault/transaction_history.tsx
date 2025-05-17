"use client";

import { Button } from '@/app/Vault/UI/button';

type Transaction = {
  id: string;
  value: string;
  date: string;
  status: string;
};

export default function TransactionHistory() {
  const transactions: Transaction[] = [
    {
      id: '0xb4d...0e8',
      value: '$100',
      date: '23 Augustus 2025',
      status: 'Deposit'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-6">Yield History</h2>
      
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-800 p-4">
          <div className="text-gray-400 font-medium">ID</div>
          <div className="text-gray-400 font-medium">Value</div>
          <div className="text-gray-400 font-medium">Date</div>
          <div className="text-gray-400 font-medium text-right">Status</div>
        </div>
        
        {transactions.map((tx) => (
          <div key={tx.id} className="grid grid-cols-4 p-4 border-t border-gray-800">
            <div className="font-mono text-sm">{tx.id}</div>
            <div>{tx.value}</div>
            <div>{tx.date}</div>
            <div className="text-right">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white rounded-full text-xs py-0 h-7"
              >
                {tx.status}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}