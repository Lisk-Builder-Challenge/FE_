'use client';
import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const data = [
  { name: 'Mon', uv: 4, pv: 5 },
  { name: 'Tue', uv: 4.2, pv: 5.5 },
  { name: 'Wed', uv: 5, pv: 6.5 },
  { name: 'Thu', uv: 4.8, pv: 5.2 },
  { name: 'Fri', uv: 3.9, pv: 4.1 },
  { name: 'Sat', uv: 3.5, pv: 6 },
  { name: 'Sun', uv: 2.5, pv: 8 },
];

const sharedBoxStyle = {
  backgroundImage: `
    radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
    linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)
  `,
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

export default function YieldHistoryChart() {
  return (
    <div className={`${inter.className} w-[1241px] mx-auto mt-10 text-white`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Yield History</h2>
        <div className="flex gap-2">
          <button className="bg-white/10 text-white text-sm px-4 py-2 rounded-md border border-white/20">
            Weekly ▼
          </button>
          <button className="bg-white/10 text-white text-sm px-4 py-2 rounded-md border border-white/20">
            All Users ▼
          </button>
        </div>
      </div>

      {/* Shape 1 */}
      <div
        className="rounded-[40px] p-2 relative"
        style={{
          ...sharedBoxStyle,
          boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Shape 2 */}
        <div
          className="rounded-[30px] px-4 py-3"
          style={{
            ...sharedBoxStyle,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div className="text-center text-white font-medium mb-2">
            Lesson Hour Tracking <span className="text-md">↝</span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#000000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: '#ccc', fontSize: 13 }} />
              <YAxis tick={{ fill: '#ccc', fontSize: 13 }} domain={[2, 8]} ticks={[2, 4, 6, 8]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1c1b33', border: 'none', color: 'white' }}
                labelStyle={{ color: '#fff' }}
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#ffffff"
                strokeWidth={2}
                fill="url(#gradientFill)"
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#ffffff"
                strokeOpacity={0.6}
                strokeWidth={1}
                fill="transparent"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}