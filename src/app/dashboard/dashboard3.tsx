'use client';
import React from 'react';
import { Inter } from 'next/font/google';
// import { EllipsisVertical } from 'lucide-react';
import { StrategyDetails } from './strategyDetails';

const inter = Inter({ subsets: ['latin'] });

export default function StrategyAuctionTable() {
  const data = {
    operator: "EigenYields",
    vault: "USD++",
    category: "RWA",
    apy: "6.1%",
    valueRestaked: "221 ETH",
    stakers: "10",
    quorum: "unQualified",
    strategy: 'The vault buys these tokens and earns yield from T-bill interest',
      totalManageVault: '500,000 USD++',
      platforms: [
        { name: 'Ondo Finance' },
        { name: 'Maple Finance RWA' },
        { name: 'OpenEden' },
        { name: 'Backed.fi' }
      ],
      assetDetails: 'Tokenized U.S. Treasury Bills available on-chain'
  };

  const data2 = {
    operator: "OpenEden",
    vault: "T-Bill Vault",
    category: "RWA",
    apy: "4.8%",
    valueRestaked: "1200 ETH",
    stakers: "1,210",
    quorum: "Qualified",
    strategy: "USDC deposited into a vault that earns yield from tokenized U.S.",
      totalManageVault: '10,000,000 USD',
      platforms: [
        { name: 'OpenEden' },
        { name: 'Backed.fi' }
    ],
    assetDetails: 'Tokenized T-Bills, on-chain compliant with institutional standards'
  };

    const data3 = {
      operator: "Backed.fi",
      vault: "bIB01 (iShares Bond ETF)",
      category: "RWA",
      apy: "5.1%",
      valueRestaked: "300 ETH",
      stakers: "432",
      quorum: "Qualified",
      strategy: "Backed issues tokens backed 1:1 with real-world ETFs and bonds",
      totalManageVault: "3,500,000 USD",
      platforms: [{ name: 'Backed.fi' }],
      assetDetails: "Fully collateralized, tokenized bonds and ETFs"
    };

    const data4 = {
      operator: "Ondo Finance",
      vault: "OUSG",
      category: "RWA",
      apy: "5.3%",
      valueRestaked: "2,000,000 USDC",
      stakers: "980",
      quorum: "Qualified",
      strategy: "Offers tokenized access to U.S. Treasuries for stablecoin holders",
      totalManageVault: "50,000,000 USD",
      platforms: [{ name: 'Ondo Finance' }],
      assetDetails: "On-chain exposure to short-term U.S. government bonds"
    };

    const data5 = {
      operator: "Maple Finance",
      vault: "USDC Lending Pool",
      category: "RWA",
      apy: "7.2%",
      valueRestaked: "850,000 USDC",
      stakers: "1,430",
      quorum: "Qualified",
      strategy: "Pooled lending to undercollateralized institutional borrowers",
      totalManageVault: "20,000,000 USD",
      platforms: [{ name: 'Maple Finance' }],
      assetDetails: "Real-world borrower exposure with KYC/KYB compliance"
    };
    
    const data6 = {
      operator: "Centrifuge",
      vault: "Tinlake",
      category: "RWA",
      apy: "6.4%",
      valueRestaked: "2,500 ETH",
      stakers: "1,050",
      quorum: "Qualified",
      strategy: "Real-world assets (like invoices, real estate) tokenized and used as collateral",
      totalManageVault: "30,000 USD",
      platforms: [{ name: 'Centrifuge' }],
      assetDetails: "Tokenized RWAs such as invoices and credit lines"
    };

    const data7 = {
        operator: "Stader Labs",
        vault: "ETHx Staking",
        category: "RWA",
        apy: "3.9%",
        valueRestaked: "22,500 ETH",
        stakers: "6,200",
        quorum: "unqualified",
        strategy: "Stakes ETH across validators with built-in liquidity token (ETHx)",
        totalManageVault: "70,000 USD",
        platforms: [
          { name: "Ethereum" },
          { name: "Polygon" },
          { name: "Binance Chain" }
        ],
        assetDetails: "ETHx token represents staked ETH with auto-compounding"
      };
    
    const data8 = {
      operator: "Goldfinch",
      vault: "USDC Senior Pool",
      category: "RWA",
      apy: "10.3%",
      valueRestaked: "7,100 USDC",
      stakers: "1,050",
      quorum: "Qualified",
      strategy: "Loans to off-chain businesses via crypto-native credit lines",
      totalManageVault: "18,000,000 USD",
      platforms: [
        { name: "Ethereum" },
        { name: "Celo" }
      ],
      assetDetails: "USDC lent to businesses in emerging markets (off-chain verified)"
    };

    const data9 =   {
      operator: "Matrixdock",
      vault: "STBT (Short-term Treasury Token)",
      category: "RWA",
      apy: "5.0%",
      valueRestaked: "5,800 USDC",
      stakers: "890",
      quorum: "Qualified",
      strategy: "1:1 USDC-backed tokenized exposure to short-term US T-Bills",
      totalManageVault: "15,000,000 USD",
      platforms: [
        { name: "Matrixport" },
        { name: "Ethereum" },
        { name: "Arbitrum" }
      ],
      assetDetails: "STBT is backed by U.S. Treasury instruments held off-chain"
    };

    const data10 =   {
      operator: "Centrifuge",
      vault: "Tinlake Pool",
      category: "RWA",
      apy: "8.2%",
      valueRestaked: "4,400 ETH",
      stakers: "430",
      quorum: "Qualified",
      strategy: "Loans backed by tokenized real-world assets (invoices, real estate)",
      totalManageVault: "12,000,000 USD",
      platforms: [
        { name: "Centrifuge Chain" },
        { name: "Ethereum" },
        { name: "Polkadot" }
      ],
      assetDetails: "Tokenized RWA pools (e.g. invoices, property-backed loans)"
    };
      
  const sharedBoxStyle = {
    backgroundImage: `
      radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 80%),
      linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 20%)
    `,
    backgroundBlendMode: 'overlay',
    backdropFilter: 'blur(16px)',
  };

  return (
    <div className={`${inter.className} w-full flex justify-center px-4 py-10`}>
      <div className="w-full max-w-[1241px] space-y-5">
          {/* Animated Silhouette Title */}
          <h2 className="text-5xl font-bold text-center relative animated-gradient-text"
          style={{
            lineHeight: '1.2',
            paddingBottom: '0.25em',
            overflow: 'visible',
          }}>
          Current Strategy Auction
          </h2>
  
        {/* Header */}
        <div
          className="grid grid-cols-8 text-sm font-medium text-gray-300 rounded-[20px] border border-gray-700 shadow-md overflow-hidden"
          style={sharedBoxStyle}
        >
          <div className="py-3 px-4 text-center">Operator</div>
          <div className="py-3 px-4 text-center">Vault</div>
          <div className="py-3 px-4 text-center">Category</div>
          <div className="py-3 px-4 text-center">Est. APY</div>
          <div className="py-3 px-4 text-center">Total Value Restaked</div>
          <div className="py-3 px-4 text-center">Stakers</div>
          <div className="py-3 px-4 text-center">Quorum</div>
          <div className="py-3 px-4 text-center">Details</div>
        </div>

        {/* Data row */}
        <div
          className="grid grid-cols-8 text-sm text-white rounded-[20px] border border-gray-700 shadow-md overflow-hidden"
          style={sharedBoxStyle}
        >
          <div className="py-4 px-4 text-center">{data.operator}</div>
          <div className="py-4 px-4 text-center">{data.vault}</div>
          <div className="py-4 px-4 text-center">{data.category}</div>
          <div className="py-4 px-4 text-center">{data.apy}</div>
          <div className="py-4 px-4 text-center">{data.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data.stakers}</div>
          <div className="py-4 px-4 text-center">{data.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data} /></div>
          
          <div className="py-4 px-4 text-center">{data2.operator}</div>
          <div className="py-4 px-4 text-center">{data2.vault}</div>
          <div className="py-4 px-4 text-center">{data2.category}</div>
          <div className="py-4 px-4 text-center">{data2.apy}</div>
          <div className="py-4 px-4 text-center">{data2.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data2.stakers}</div>
          <div className="py-4 px-4 text-center">{data2.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data2} /></div>

          <div className="py-4 px-4 text-center">{data3.operator}</div>
          <div className="py-4 px-4 text-center">{data3.vault}</div>
          <div className="py-4 px-4 text-center">{data3.category}</div>
          <div className="py-4 px-4 text-center">{data3.apy}</div>
          <div className="py-4 px-4 text-center">{data3.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data3.stakers}</div>
          <div className="py-4 px-4 text-center">{data3.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data3} /></div>

          <div className="py-4 px-4 text-center">{data4.operator}</div>
          <div className="py-4 px-4 text-center">{data4.vault}</div>
          <div className="py-4 px-4 text-center">{data4.category}</div>
          <div className="py-4 px-4 text-center">{data4.apy}</div>
          <div className="py-4 px-4 text-center">{data4.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data4.stakers}</div>
          <div className="py-4 px-4 text-center">{data4.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data4} /></div>

          <div className="py-4 px-4 text-center">{data5.operator}</div>
          <div className="py-4 px-4 text-center">{data5.vault}</div>
          <div className="py-4 px-4 text-center">{data5.category}</div>
          <div className="py-4 px-4 text-center">{data5.apy}</div>
          <div className="py-4 px-4 text-center">{data5.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data5.stakers}</div>
          <div className="py-4 px-4 text-center">{data5.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data5} /></div>

          <div className="py-4 px-4 text-center">{data6.operator}</div>
          <div className="py-4 px-4 text-center">{data6.vault}</div>
          <div className="py-4 px-4 text-center">{data6.category}</div>
          <div className="py-4 px-4 text-center">{data6.apy}</div>
          <div className="py-4 px-4 text-center">{data6.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data6.stakers}</div>
          <div className="py-4 px-4 text-center">{data6.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data6} /></div>

          <div className="py-4 px-4 text-center">{data7.operator}</div>
          <div className="py-4 px-4 text-center">{data7.vault}</div>
          <div className="py-4 px-4 text-center">{data7.category}</div>
          <div className="py-4 px-4 text-center">{data7.apy}</div>
          <div className="py-4 px-4 text-center">{data7.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data7.stakers}</div>
          <div className="py-4 px-4 text-center">{data7.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data7} /></div>

          <div className="py-4 px-4 text-center">{data8.operator}</div>
          <div className="py-4 px-4 text-center">{data8.vault}</div>
          <div className="py-4 px-4 text-center">{data8.category}</div>
          <div className="py-4 px-4 text-center">{data8.apy}</div>
          <div className="py-4 px-4 text-center">{data8.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data8.stakers}</div>
          <div className="py-4 px-4 text-center">{data8.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data8} /></div>
          
          <div className="py-4 px-4 text-center">{data9.operator}</div>
          <div className="py-4 px-4 text-center">{data9.vault}</div>
          <div className="py-4 px-4 text-center">{data9.category}</div>
          <div className="py-4 px-4 text-center">{data9.apy}</div>
          <div className="py-4 px-4 text-center">{data9.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data9.stakers}</div>
          <div className="py-4 px-4 text-center">{data9.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data9} /></div>

          <div className="py-4 px-4 text-center">{data10.operator}</div>
          <div className="py-4 px-4 text-center">{data10.vault}</div>
          <div className="py-4 px-4 text-center">{data10.category}</div>
          <div className="py-4 px-4 text-center">{data10.apy}</div>
          <div className="py-4 px-4 text-center">{data10.valueRestaked}</div>
          <div className="py-4 px-4 text-center">{data10.stakers}</div>
          <div className="py-4 px-4 text-center">{data10.quorum}</div>
          <div className="py-4 px-4"><StrategyDetails {...data10} /></div>
        </div>
      </div>
      <style jsx>{`
        .animated-gradient-text {
          background: linear-gradient(120deg, #ffffff 0%, #999999 50%, #000000 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerText 10s ease-in-out infinite;
        }

        @keyframes shimmerText {
          0% {
            background-position: 200% 0%;
          }
          100% {
            background-position: -100% 0%;
          }
        }
      `}</style>
  </div>
  );
}