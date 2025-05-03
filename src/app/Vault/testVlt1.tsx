// 'use client';
// import React from "react";
// import { Inter } from 'next/font/google';
// // import { ConnectButton } from '@rainbow-me/rainbowkit';
// import {useWriteContract, useWaitForTransactionReceipt} from "wagmi";
// //import { address } from "framer-motion/client";
// import {erc20Abi} from "viem";
// import vaultAbi from "@/app/abi/VaultABI.json"
// import { useState } from "react";
// import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] });

// const sharedBoxStyle = {
//   backgroundImage: `
//     radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 20%),
//     linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 100%)
//   `,
//   backgroundBlendMode: 'overlay',
//   backdropFilter: 'blur(16px)',
//   border: '1px solid rgba(255, 255, 255, 0.2)',
// };


// export default function VaultCard() {
  

//   const { writeContract, isPending, data: hash } = useWriteContract();
//   //const {isLoading, isError, isSuccess} = useWaitForTransactionReceipt({hash});
//   const handleApproval = async () => {
//     const amount = parseFloat(usdcAmount);  // Mendapatkan jumlah yang dimasukkan oleh pengguna

//     if (!usdcAmount || isNaN(amount) || amount <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     const parsedAmount = BigInt(amount * 10 ** 6);

//     writeContract({
//       address : "0x123d93fc5188c561A89B52F2A429D026B696c2c2", abi: erc20Abi, functionName: "approve", args: [ "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", parsedAmount]
      
      
//     });
//     alert(`Approval successful! You can now deposit ${usdcAmount} USDC.`);
//   }

//     const handleDeposit = async () => {
    
//     const amount = parseFloat(usdcAmount);
//     if(!usdcAmount || isNaN(amount) || parseFloat(usdcAmount) <= 0)  {
//       alert("Please enter a valid amount.");
//       return;
//     } else alert(`Deposit amount: ${usdcAmount} USDC`)

//     if(isNaN(amount)) {
//       alert("Please enter a valid number.");
//       return;
//     }

//     const parsedAmount = BigInt(Number(usdcAmount) * 10 ** 18); // Assuming USDC has 6 decimals


//     writeContract({
//       abi: vaultAbi, address: "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", functionName: "deposit", args: [parsedAmount]
//     })
//   }

//   const handleWithdraw = async () => {
//     const amount = parseFloat(usdcAmount);
//     if(!usdcAmount || isNaN(amount) || parseFloat(usdcAmount) <= 0)  {
//       alert("Please enter a valid amount.");
//       return;
//     } else alert(`Deposit amount: ${usdcAmount} USDC`)

//     if(isNaN(amount)) {
//       alert("Please enter a valid number.");
//       return;
//     }

//     const parsedAmount = BigInt(Number(usdcAmount) * 10 ** 18);

//     writeContract({
//       abi: vaultAbi, address: "0x031fad29699d6fDeC5353b9C58c81313E1B15a06", functionName: "withdraw", args: [parsedAmount]
//     })
//   }

//   const[isDeposit, setIsDeposit] = useState(true);
//   const [usdcAmount, setUsdcAmount] = useState('');


//   return (
//     <div className={`${inter.className} flex justify-center items-center bg-black px-6 py-10 flex-col`}>
//       <Head>
//         <title>enpece</title>
//       </Head>
//       <div
//         className="flex w-[1241px] h-[290px] rounded-[40px] p-6 text-white flex-row"
//         style={{ ...sharedBoxStyle, boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.1)' }}
//       >
//         {/* Kiri */}
//         <div className="flex flex-col justify-between flex-1 pr-8">
//           <div>
//             <h2 className="text-2xl font-semibold">USD++ Vault</h2>
//             <p className="text-gray-400 mt-1">
//               Earn real yield from multiple DeFi protocols while maintaining stable exposure to USD
//               {/*<br/>
//               {isPending ? "pending" : "tidak pending"}
//               <br/>
//               {isLoading ? "sedang loading" : "tidak loading"}
//               <br/>
//               {isError ? "sedang error" : "tidak error"}
//               <br/>
//               {isSuccess ? "success" : "tidak success"}
//               */}
//             </p>
//           </div>
//           <div className="flex items-center gap-3 mt-6">
//             <span className="h-3 w-3 rounded-full bg-blue-500" />
//             <span className="text-base font-medium">Active</span>
//           </div>
//           <div className="flex gap-4 mt-4">
//             {/*{['Deposit', 'Withdraw'].map((label) => (
//               <button 
//                 onClick={handleDeposit}
//                 key={label}
//                 className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
//               >
//                 {label}
//               </button>
              
//             ))}*/}

//             <button 
//                   onClick={handleApproval}
//                   className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
//                 >
//                   Approval
//             </button>

//             <button 
//                   //onClick={handleDeposit}
//                   onClick={()=> setIsDeposit(true)}
//                   className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
//                 >
//                   Deposit
//             </button>
//             <button 
//                   //onClick={handleWithdraw}
//                   onClick={()=> setIsDeposit(false)}
//                   className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
//                 >
//                   Withdraw
//             </button>
//           <div>


            
//           </div>
//           </div>
//         </div>

//         {/* Kanan - hanya statistik, tanpa shape */}
//         <div className="flex flex-col justify-end items-end flex-1">
//         <div className="px-8 py-3 rounded-2xl backdrop-blur-md border border-white/10 bg-black/40 shadow-md bg-[url('/vault1.png')] bg-no-repeat bg-auto bg-left-top h-[200px]">
//             <div className="flex justify-center gap-8 text-center bg-transparent items-end self-end mt-30">
//               <div>
//                 <p className="text-lg font-semibold">8.2%</p>
//                 <p className="text-gray-400 text-sm">Current APY</p>
//               </div>
//               <div>
//                 <p className="text-lg font-semibold">$12.5M</p>
//                 <p className="text-gray-400 text-sm">TVL</p>
//               </div>
//               <div>
//                 <p className="text-lg font-semibold">$5,234</p>
//                 <p className="text-gray-400 text-sm">Your Balance</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
      
//       {isDeposit ? (
//           <div
//           className={`${inter.className} w-[1241px] rounded-[40px] p-5 mx-auto mt-10 text-white`}
//           style={{
//             ...sharedBoxStyle,
//             boxShadow: '0px 30px 60px 0px rgba(0, 0, 0, 0.10)',
//           }}
//         >
//           <h2 className="text-2xl font-semibold mb-4">Deposit</h2>
    
//           <div className="flex gap-6 mb-6">
//             {/* Input Section */}
//             <div className="flex flex-col gap-3 w-1/2">
//               {/* USDC Input */}
//               <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium">USDC</p>
//                   <p className="text-sm text-gray-400">Balance: 0.00</p>
                  
//                 </div>
//                 <input
//                   inputMode="decimal"
//                   className="bg-transparent text-right text-lg font-semibold focus:outline-none w-60"
//                   placeholder="0.00"
//                   value={usdcAmount}
//                   onChange={(e) => setUsdcAmount(e.target.value)}
//                 />
//               </div>
    
//               {/* USD++ Output */}
//               <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium">USD++</p>
//                   <p className="text-sm text-gray-400">Balance: 0.00</p>
//                 </div>
//                 <p className="text-lg font-semibold"
//                 >{usdcAmount ? usdcAmount : "0.00"}</p>
//               </div>
//             </div>
    
//             {/* Preview Section */}
//             <div
//               className="w-1/2 px-4 py-3 rounded-lg space-y-3"
//               style={{
//                 ...sharedBoxStyle,
//                 borderRadius: '12px',
//                 padding: '16px',
//               }}
//             >
//               <h3 className="font-semibold text-white text-base">Transaction Preview</h3>
//               <div className="flex justify-between text-sm text-gray-300">
//                 <span>Estimated APY</span>
//                 <span className="text-white font-medium">8.2%</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray-300">
//                 <span>Network Fee</span>
//                 <span className="text-white font-medium">-$2.50</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray-300">
//                 <span>Min. Deposit</span>
//                 <span className="text-white font-medium">$100</span>
//               </div>
//             </div>
//           </div>
    
//           {/* Confirm Button */}
//           <button
//             className="w-full py-3 rounded-xl text-sm font-medium text-white hover:bg-white hover:text-black"
//             //onClick={() => alert(`Deposit amount: ${usdcAmount} USDC`)}
//             onClick={handleDeposit}
//             style={{
//               backgroundImage: `
//                 radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%),
//                 linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)
//               `,
//               backdropFilter: 'blur(12px)',
//               border: '1px solid rgba(255,255,255,0.1)',
//             }}
//           >
//             Confirm Deposit
//           </button>
//         </div>
        
//         ):(
//           <div
//               className={`${inter.className} w-[1241px] rounded-[40px] p-5 mx-auto mt-10 text-white`}
//               style={{
//                 ...sharedBoxStyle,
//                 boxShadow: '0px 30px 60px 0px rgba(0, 0, 0, 0.10)',
//               }}
//             >
//               <h2 className="text-2xl font-semibold mb-4">Withdraw</h2>

//               <div className="flex gap-6 mb-6">
//                 {/* Input Section */}
//                 <div className="flex flex-col gap-3 w-1/2">
//                   {/* USDC Input */}
//                   <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium">USDC</p>
//                       <p className="text-sm text-gray-400">Balance: 0.00</p>
//                     </div>
//                     <input
//                       inputMode="decimal"
//                       className="bg-transparent text-right text-lg font-semibold focus:outline-none w-60"
//                       placeholder="0.00"
//                       value={usdcAmount}
//                       onChange={(e) => setUsdcAmount(e.target.value)}
//                     />
//                   </div>

//                   {/* USD++ Output */}
//                   <div className="bg-black/10 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium">USD++</p>
//                       <p className="text-sm text-gray-400">Balance: 0.00</p>
//                     </div>
//                     <p className="text-lg font-semibold">0.00</p>
//                   </div>
//                 </div>

//                 {/* Preview Section */}
//                 <div
//                   className="w-1/2 px-4 py-3 rounded-lg space-y-3"
//                   style={{
//                     ...sharedBoxStyle,
//                     borderRadius: '12px',
//                     padding: '16px',
//                   }}
//                 >
//                   <h3 className="font-semibold text-white text-base">Transaction Preview</h3>
//                   <div className="flex justify-between text-sm text-gray-300">
//                     <span>Estimated APY</span>
//                     <span className="text-white font-medium">8.2%</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-300">
//                     <span>Network Fee</span>
//                     <span className="text-white font-medium">-$2.50</span>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-300">
//                     <span>Min. Deposit</span>
//                     <span className="text-white font-medium">$100</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Confirm Button */}
//               <button
//                 className="w-full py-3 rounded-xl text-sm font-medium text-white hover:bg-white hover:text-black"
//                 //onClick={() => alert(`Deposit amount: ${usdcAmount} USDC`)}
//                 onClick={handleWithdraw}
//                 style={{
//                   backgroundImage: `
//                     radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%),
//                     linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)
//                   `,
//                   backdropFilter: 'blur(12px)',
//                   border: '1px solid rgba(255,255,255,0.1)',
//                 }}
//               >
//                 Confirm Wihtdraw
//               </button>
//             </div>
//         )
//         }


//     </div>
//   );
// }




// {/*}
//             <button 
//                   onClick={handleApproval}
//                   className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
//                 >
//                   Approval
//             </button>

//             <button 
//                   onClick={handleDeposit}
//                   className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
//                 >
//                   Deposit
//             </button>
//             <button 
//                   onClick={handleWithdraw}
//                   className="border border-white/30 px-6 py-2 rounded-md text-sm transition bg-transparent hover:bg-white hover:text-black active:bg-white/10"
//                 >
//                   Withdraw
//             </button>
// */}