'use client';
import React from "react";
import { useEffect } from "react";
import { Inter } from 'next/font/google';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useWriteContract, useReadContract, useAccount, useWaitForTransactionReceipt} from "wagmi";
//import { useWaithForTransaction } from "wagmi";
//import { address } from "framer-motion/client";
import {erc20Abi} from "viem";
import vaultAbi from "@/app/abi/VaultABI.json"
import { useState } from "react";
import Head from "next/head";

import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

// UNTUK CHART
const data = [
  { name: 'Mon', uv: 4, pv: 5 },
  { name: 'Tue', uv: 4.2, pv: 5.5 },
  { name: 'Wed', uv: 5, pv: 6.5 },
  { name: 'Thu', uv: 4.8, pv: 5.2 },
  { name: 'Fri', uv: 3.9, pv: 4.1 },
  { name: 'Sat', uv: 3.5, pv: 6 },
  { name: 'Sun', uv: 2.5, pv: 8 },
];



const inter = Inter({ subsets: ['latin'] });

const sharedBoxStyle = {
  backgroundImage: `
    radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 100%)
  `,
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};


export default function VaultCard() {
  const[isDeposit, setIsDeposit] = useState(true);
  const [usdcAmount, setUsdcAmount] = useState('');
  const [actionType, setActionType] = useState('');
  const [InputusdcAmount] = useState('');
  //const [InputusdcAmount, setInputUsdcAmount] = useState('');
  const { writeContract, data: hash } = useWriteContract();
  //const { writeContract, isPending, data: hash } = useWriteContract();
  const {isLoading, isError, isSuccess} = useWaitForTransactionReceipt({hash});

  const handleApproval = async () => {
    const amount = parseFloat(usdcAmount);  // Mendapatkan jumlah yang dimasukkan oleh pengguna

    if (!usdcAmount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const parsedAmount = BigInt(amount * 10 ** 6);
    setActionType('approval');
    alert(`Requesting approval for ${usdcAmount} USDC...`);
    writeContract({
      address : "0x123d93fc5188c561A89B52F2A429D026B696c2c2", abi: erc20Abi, functionName: "approve", args: [ "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", parsedAmount]
    });
    alert(`Approval successful! You can now deposit ${usdcAmount} USDC.`);
  }
  
  // useEffect(() => {
  //   if (isPending && actionType === 'approval') {
  //     alert("Approval transaction submitted. Waiting for confirmation...");
  //   }
  // }, [isPending, actionType]);

  useEffect(() => {
    if (isLoading && actionType === 'approval') {
      alert("Approval transaction is being processed on the blockchain");
    }
  }, [isLoading, actionType]);

  useEffect(() => {
    if (isError && actionType === 'approval') {
      alert("Approval transaction failed! Please try again.");
      setActionType('');
    }
  }, [isError, actionType]);

  useEffect(() => {
    if (isSuccess && actionType === 'approval') {
      alert("Approval successful! You can now deposit ${usdcAmount} USDC");
      setActionType('');
    }
  }, [isSuccess, actionType, InputusdcAmount]);
  
{/*}
  const ReadBalance = () => {
    const { address } = useAccount();
    
    const { data: balance } = useReadContract({
      abi: erc20Abi,
      address: '0x031fad29699d6fDeC5353b9C58c81313E1B15a06',
      functionName: 'balanceOf',
      args: [address as `0x${string}`], 
    });
  
    //const formattedVaultBalance = balance ? Number(balance) / 10 ** 6 : 0;
  
    // return (
    //   <div>
    //     {address
    //       ? `Balance: ${formattedBalance.toFixed(2)} USDC`
    //       : 'Wallet not connected.'}
    //   </div>
    // );
    return <div>Balance: {balance?.toString()}</div>;

  };
  */}
    const { address } = useAccount();
    
    const { data: balance } = useReadContract({
      abi: vaultAbi,
      address: '0xF065f94c52F78c9978585f2372D18efaD9b1cC87',
      functionName: 'balanceOf',
      args: [address as `0x${string}`], 
    });
  
    //const formattedVaultBalance = balance ? Number(balance) / 10 ** 6 : 0;
  
    // return (
    //   <div>
    //     {address
    //       ? `Balance: ${formattedBalance.toFixed(2)} USDC`
    //       : 'Wallet not connected.'}
    //   </div>
    // );

  //const formattedVaultBalance = balance ? Number(balance) / 10 ** 6 : 0;
  

  // const handleDeposit = async () => {
    
  //   const amount = parseFloat(usdcAmount);
  //   if(!usdcAmount || isNaN(amount) || parseFloat(usdcAmount) <= 0)  {
  //     alert("Please enter a valid amount.");
  //     return;
  //   } else alert(`Deposit amount: ${usdcAmount} USDC`)

  //   if(isNaN(amount)) {
  //     alert("Please enter a valid number.");
  //     return;
  //   }

  //   const parsedAmount = BigInt(Number(usdcAmount) * 10 ** 18); 
    
  //   writeContract({
  //     abi: vaultAbi, address: "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", functionName: "deposit", args: [parsedAmount]
  //   })
  // }

  const handleWithdraw = async () => {
    const amount = parseFloat(usdcAmount);
    if(!usdcAmount || isNaN(amount) || parseFloat(usdcAmount) <= 0)  {
      alert("Please enter a valid amount.");
      return;
    } else alert(`Deposit amount: ${usdcAmount} USDC`)

    if(isNaN(amount)) {
      alert("Please enter a valid number.");
      return;
    }

    const parsedAmount = BigInt(Number(usdcAmount) * 10 ** 18);

    writeContract({
      abi: vaultAbi, address: "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", functionName: "withdraw", args: [parsedAmount]
    })
  }

  


  return (
    <div className={`${inter.className} flex justify-center items-center bg-black px-6 py-10 flex-col`}>
      <Head>
        <title>enpece</title>
      </Head>
      <div
        className="flex w-[1241px] h-[290px] rounded-[40px] p-6 text-white flex-row"
        style={{ ...sharedBoxStyle, boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Kiri */}
        <div className="flex flex-col justify-between flex-1 pr-8">
          <div>
            <h2 className="text-4xl font-semibold">IDRX++ Vault</h2>
            <p className="text-gray-400 mt-1">
              Earn real yield from multiple DeFi protocols while maintaining stable exposure to IDR
              {/* <br/>
              {isPending ? "pending" : "tidak pending"}
              <br/>
              {isLoading ? "sedang loading" : "tidak loading"}
              <br/>
              {isError ? "sedang error" : "tidak error"}
              <br/>
              {isSuccess ? "success" : "tidak success"} */}
            </p>
            
          </div>
          <div className="flex items-center gap-3 mt-6">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-base font-medium">Active</span>
          </div>
          <div className="flex gap-4 mt-4">
            {/*{['Deposit', 'Withdraw'].map((label) => (
              <button 
                onClick={handleDeposit}
                key={label}
                className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
              >
                {label}
              </button>
              
            ))}*/}

            {/* <button 
                  onClick={handleApproval}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Approval
            
            </button> */}

            

            {/* <button 
                  onClick={handleApproval}
                  
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Approval
            </button> */}

            <button 
                  //onClick={handleDeposit}
                  onClick={()=> setIsDeposit(true)}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Deposit
            </button>
            <button 
                  //onClick={handleWithdraw}
                  onClick={()=> setIsDeposit(false)}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Withdraw
            </button>
          <div>


            
          </div>
          </div>
        </div>
      

      {/* Kanan */}
      <div className="flex flex-col justify-center items-center flex-1 relative">
                <div className="w-full h-[300px] rounded-3xl backdrop-blur-md border border-white/10 shadow-md bg-black/40 relative overflow-hidden">

                <div className="absolute -bottom-20 left-1/2 w-[200%] h-40 transform -translate-x-1/2 z-5"
                style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 230, 0, 0.15) 0%, rgba(255, 230, 0, 0) 100%)',
                  filter: 'blur(40px)'
                }}/>
          
                {/* Background Shape Hitam */}
                <div className="absolute inset-0 bg-black rounded-2xl opacity-70 z-0" />

                {/* Gambar di atas shape */}
                <div className="absolute inset-0 bg-[url('/vault1.png')] bg-no-repeat bg-contain bg-center z-10" />

                {/* Kontainer Statistik di atas gambar */}
                <div className="absolute bottom-4 left-1/3 transform -translate-x-1/4 flex gap-16 text-center z-20">
                  <div>
                    <p className="text-lg font-semibold">8.2%</p>
                    <p className="text-gray-300 text-sm">Current APY</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">12 M</p>
                    <p className="text-gray-300 text-sm">Total Yield</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">$5,234</p>
                    <p className="text-gray-300 text-sm">Your Balance</p>
                  </div>
              </div>
          
            </div>
          </div>

      </div>
      
      {isDeposit ? (

        <div className="flex flex-row-reverse gap-6 justify-center items-center">

        
            <div
            className={`${inter.className} w-[442px] rounded-[40px] p-5 mx-auto mt-10 text-white`}
            style={{
                ...sharedBoxStyle,
                boxShadow: '0px 30px 60px 0px rgba(0, 0, 0, 0.10)',
            }}
            >
            <h2 className="text-2xl font-semibold mb-4">Deposit</h2>
        
            <div className="flex gap-6 mb-6">
                {/* Input Section */}
                <div className="flex flex-col gap-3 w-full">
                {/* USDC Input */}
                <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium">USDC</p>
                    <p className="text-sm text-gray-400">Balance: {balance?.toString()}</p>
                    
                    </div>
                    <input
                    inputMode="decimal"
                    className="bg-transparent text-right text-lg font-semibold focus:outline-none w-60"
                    placeholder="0.00"
                    value={usdcAmount}
                    onChange={(e) => setUsdcAmount(e.target.value)}
                    />
                </div>
        
                {/* USD++ Output */}
                <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium">USD++</p>
                    <p className="text-sm text-gray-400">Balance: {balance?.toString()}</p>
                    </div>
                    <p className="text-lg font-semibold"
                    >{usdcAmount ? usdcAmount : "0.00"}</p>
                </div>
                </div>
        
                {/* Preview Section */}
                
            </div>
            
            <div className="flex justify-center items-center gap-4 mt-1 my-4">
                    <div className="text-start justify-start text-Foreground-Primary text-base font-normal font-['Inter'] leading-normal">Approve Token</div>
                    <div className="text-center justify-start text-Foreground-Secondary/70 text-base font-normal font-['Inter'] leading-normal">-------</div>
                    <div className="text-center justify-start text-Foreground-Secondary/70 text-base font-normal font-['Inter'] leading-normal">Confirm Token</div>
                </div>
        
            {/* Confirm Button */}
            <button
                className="w-[402px] py-3 rounded-xl text-sm font-medium text-white hover:bg-white hover:text-black"
                //onClick={() => alert(`Deposit amount: ${usdcAmount} USDC`)}
                onClick={handleApproval}
                style={{
                backgroundImage: `
                    radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%),
                    linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)
                `,
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                Confirm Deposit
            </button>
            </div>
            

            <div className={`${inter.className} w-[778px] mx-auto mt-10 text-white`}>
            
                  {/* Shape 1 */}
                  <div
                    className="rounded-[40px] p-2 pt-4 relative"
                    style={{
                      ...sharedBoxStyle,
                      boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div className="flex justify-start ml-3 items-center mb-4">
                        <h2 className="text-2xl font-semibold">Yield History</h2>
                        
                    </div>
                    
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
                      <ResponsiveContainer width="100%" height={223}>
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
            
        
        </div>
        
        ):(
        <div className="flex flex-row-reverse gap-6 justify-center items-center">

            

          <div
              className={`${inter.className} w-[610px] rounded-[40px] p-5 mx-auto mt-10 text-white`}
              style={{
                ...sharedBoxStyle,
                boxShadow: '0px 30px 60px 0px rgba(0, 0, 0, 0.10)',
              }}
            >
              <h2 className="text-2xl font-semibold mb-4">Withdraw</h2>

              <div className="flex gap-6 mb-6">
                {/* Input Section */}
                <div className="flex flex-col gap-3 w-full">
                  {/* USDC Input */}
                  <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">USD++</p>
                      <p className="text-sm text-gray-400">Balance: {balance?.toString()}</p>
                    </div>
                    <input
                      inputMode="decimal"
                      className="bg-transparent text-right text-lg font-semibold focus:outline-none w-60"
                      placeholder="0.00"
                      value={usdcAmount}
                      onChange={(e) => setUsdcAmount(e.target.value)}
                    />
                  </div>

                  {/* USD++ Output */}
                  <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">USDC</p>
                      <p className="text-sm text-gray-400">Balance: 0.00</p>
                    </div>
                    <p className="text-lg font-semibold">0.00</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 mt-1 my-4">
                    
                </div>

              {/* Confirm Button */}
              <button
                className="w-[570px] py-3 rounded-xl text-sm font-medium text-white hover:bg-white hover:text-black"
                //onClick={() => alert(`Deposit amount: ${usdcAmount} USDC`)}
                onClick={handleWithdraw}
                style={{
                  backgroundImage: `
                    radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%),
                    linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)
                  `,
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                Confirm Wihtdraw
              </button>
            </div>



            <div className={`${inter.className} w-[610px] mx-auto mt-10 text-white`}>
            
                  {/* Shape 1 */}
                  <div
                    className="rounded-[40px] p-2 pt-4 relative"
                    style={{
                      ...sharedBoxStyle,
                      boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div className="flex justify-start ml-3 items-center mb-4">
                        <h2 className="text-2xl font-semibold">Yield History</h2>
                        
                    </div>
                    
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
                      <ResponsiveContainer width="100%" height={195}>
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
            

            </div>

        )
      }





    </div>

    
      
    
  );

}




{/*}
            <button 
                  onClick={handleApproval}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Approval
            </button>

            <button 
                  onClick={handleDeposit}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Deposit
            </button>
            <button 
                  onClick={handleWithdraw}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Withdraw
            </button>
*/}



{/*  'use client';
import React from "react";
import { Inter } from 'next/font/google';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useWriteContract, useWaitForTransactionReceipt} from "wagmi";
//import { address } from "framer-motion/client";
import {erc20Abi} from "viem";
import vaultAbi from "@/app/abi/VaultABI.json"


const inter = Inter({ subsets: ['latin'] });

const sharedBoxStyle = {
  backgroundImage: `
    radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 100%)
  `,
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};


export default function VaultCard() {

  const { writeContract, isPending, data: hash } = useWriteContract();
  const {isLoading, isError, isSuccess} = useWaitForTransactionReceipt({hash});
  const handleApproval = async () => {
    writeContract({
      address : "0x123d93fc5188c561A89B52F2A429D026B696c2c2", abi: erc20Abi, functionName: "approve", args: [ "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", BigInt(1000)]
      
    });
  }

  const handleDeposit = async () => {
    writeContract({
      abi: vaultAbi, address: "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", functionName: "deposit", args: [BigInt(1000)]
    })
  }

  const handleWithdraw = async () => {
    writeContract({
      abi: vaultAbi, address: "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", functionName: "withdraw", args: [BigInt(1000)]
    })
  }




  return (
    <div className={${inter.className} flex justify-center items-center bg-black px-6 py-10}>
      <div
        className="flex w-[1241px] h-[290px] rounded-[40px] p-6 text-white"
        style={{ ...sharedBoxStyle, boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Kiri 
        <div className="flex flex-col justify-between flex-1 pr-8">
          <div>
            <h2 className="text-2xl font-semibold">USD++ Vault</h2>
            <p className="text-gray-400 mt-1">
              Earn real yield from multiple DeFi protocols while maintaining stable exposure to USD
              <br/>
              {isPending ? "pending" : "tidak pending"}
              <br/>
              {isLoading ? "sedang loading" : "tidak loading"}
              <br/>
              {isError ? "sedang error" : "tidak error"}
              <br/>
              {isSuccess ? "success" : "tidak success"}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-base font-medium">Active</span>
          </div>
          <div className="flex gap-4 mt-4">
            {/*{['Deposit', 'Withdraw'].map((label) => (
              <button 
                onClick={handleDeposit}
                key={label}
                className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
              >
                {label}
              </button>
              
            ))}

            <button 
                  onClick={handleApproval}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Approval
            </button>

            <button 
                  onClick={handleDeposit}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Deposit
            </button>
            <button 
                  onClick={handleWithdraw}
                  className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
                >
                  Withdraw
            </button>
          <div>
            
          </div>
          </div>
        </div>

        {/* Kanan - hanya statistik, tanpa shape 
        <div className="flex flex-col justify-end items-end flex-1">
        <div className="px-8 py-3 rounded-2xl backdrop-blur-md border border-white/10 bg-black/40 shadow-md bg-[url('/vault1.png')] bg-no-repeat bg-auto bg-left-top h-[200px]">
            {/* <div className="">
                <Image
                    src={"/vault1.png"}
                    alt="vault1"
                    width={500}
                    height={500}
                    className="w-[15vw] h-[10vw] flex mx-auto"
                />
            </div> 
            <div className="flex justify-center gap-8 text-center bg-transparent items-end self-end mt-30">
              <div>
                <p className="text-lg font-semibold">8.2%</p>
                <p className="text-gray-400 text-sm">Current APY</p>
              </div>
              <div>
                <p className="text-lg font-semibold">$12.5M</p>
                <p className="text-gray-400 text-sm">TVL</p>
              </div>
              <div>
                <p className="text-lg font-semibold">$5,234</p>
                <p className="text-gray-400 text-sm">Your Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      


 </div>
);
}
 */}  