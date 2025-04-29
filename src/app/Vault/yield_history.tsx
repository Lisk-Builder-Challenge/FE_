"use client";

import { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Button } from '@/app/Vault/UI/button';
import { ChevronDown } from 'lucide-react';

// Sample data for the chart
const data = [
  { name: 'Mon', value: 2 },
  { name: 'Tue', value: 3 },
  { name: 'Wed', value: 4 },
  { name: 'Thu', value: 3 },
  { name: 'Fri', value: 5 },
  { name: 'Sat', value: 7 },
  { name: 'Sun', value: 6 },
];

export default function YieldHistory() {
  const [timeframe, setTimeframe] = useState('Weekly');
  const [userFilter, setUserFilter] = useState('All Users');
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Yield History</h2>
        
        <div className="flex gap-3">
          <FilterButton label={timeframe} />
          <FilterButton label={userFilter} />
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 h-64">
        <div className="text-center text-gray-400 mb-2 text-sm">Lesson Hour Tracking</div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickFormatter={(value) => `${value}h`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#374151',
                borderRadius: '0.375rem',
                color: 'white'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#60A5FA" 
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function FilterButton({ label }: { label: string }) {
  return (
    <Button 
      variant="outline" 
      className="border-gray-700 text-white hover:bg-gray-700 flex items-center gap-2"
    >
      {label}
      <ChevronDown className="h-4 w-4" />
    </Button>
  );
}