import React from 'react'

const Landing = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-5xl md:text-5xl text-[#000000] mb-0">
            Decentralized Yield-<br />
            Bearing Stablecoins,<br />
            Powered by Strategy<br />
            Auctions
          </h1>
          <p className="text-gray-600 mb-8">
            Earn yield on USDC, IDRX, or EUROC through < br/>
            permissionless, competitive manager strategies.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition">
              Launch App
            </button>
            <button className="border border-black px-6 py-2 rounded-md hover:bg-gray-100 text-[#000000] transition">
              Explore Vaults
            </button>
          </div>
        </div>

        {/* Placeholder Section */}
        <div className="bg-gray-200 h-[300px] md:h-[350px] rounded-xl flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </main>
    
  )
}

export default Landing