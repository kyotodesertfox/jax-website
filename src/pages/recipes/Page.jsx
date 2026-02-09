import React, { useState } from 'react';
import { Wallet, ArrowDown, Info, RefreshCw } from 'lucide-react';

export default function ExchangePage() {
    const [amount, setAmount] = useState('');
    const [targetToken, setTargetToken] = useState('CREDITS');

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">

        {/* Header Section - Matches your Recipes/Events structure */}
        <header className="mb-12 border-b-8 border-[#FBB117] pb-6 flex flex-col md:flex-row justify-between items-end">
        <div className="w-full md:w-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900">
        The <span className="text-[#FBB117]">Exchange</span>
        </h1>
        <p className="text-gray-600 font-bold mt-2 uppercase tracking-widest text-sm italic">
        Redeem Guild Rewards
        </p>
        </div>
        </header>

        {/* Functional Portal Area */}
        <div className="max-w-2xl mx-auto">

        {/* The Swap Card */}
        <section className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-xl relative overflow-visible">

        {/* Conditional "Hops" or Decorative Icon */}
        <div className="absolute -top-6 -right-6 w-16 h-16 animate-pulse opacity-20">
        <RefreshCw className="w-full h-full text-[#FBB117]" />
        </div>

        <div className="flex flex-col gap-2">
        {/* Input Section */}
        <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
        <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-black uppercase tracking-widest text-gray-400">You Deposit</span>
        <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
        <Wallet size={12} /> Balance: 0.00
        </span>
        </div>
        <div className="flex justify-between items-center">
        <input
        type="number"
        placeholder="0.0"
        className="bg-transparent text-3xl font-black text-gray-900 outline-none w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <div className="bg-white px-4 py-2 rounded-xl flex items-center gap-2 border-2 border-gray-100 shadow-sm">
        <div className="w-6 h-6 rounded-full bg-[#FBB117]" />
        <span className="font-black text-gray-900 text-sm">$ART</span>
        </div>
        </div>
        </div>

        {/* Divider Arrow */}
        <div className="flex justify-center -my-4 z-10">
        <div className="bg-white border-2 border-gray-100 p-2 rounded-xl text-[#FBB117] shadow-md">
        <ArrowDown size={20} strokeWidth={3} />
        </div>
        </div>

        {/* Output Section */}
        <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
        <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-black uppercase tracking-widest text-gray-400">You Receive</span>
        </div>
        <div className="flex justify-between items-center">
        <div className="text-3xl font-black text-gray-300">
        {amount ? (amount * 0.95).toFixed(2) : "0.00"}
        </div>
        <div className="flex gap-1 bg-white p-1 rounded-xl border-2 border-gray-100">
        {['CREDITS', 'BEER'].map((token) => (
            <button
            key={token}
            onClick={() => setTargetToken(token)}
            className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${
                targetToken === token
                ? 'bg-[#FBB117] text-gray-900 shadow-sm'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            >
            {token}
            </button>
        ))}
        </div>
        </div>
        </div>

        {/* The Action Button */}
        <button className="w-full mt-6 bg-gray-900 hover:bg-[#FBB117] text-white hover:text-gray-900 font-black py-5 rounded-2xl transition-all shadow-lg active:scale-[0.98] uppercase tracking-tighter text-lg">
        Initialize Swap
        </button>
        </div>
        </section>

        {/* Footer Info Section */}
        <section className="mt-8 bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-start shadow-sm">
        <div className="text-[#FBB117] mt-1 shrink-0">
        <Info size={24} strokeWidth={3} />
        </div>
        <div>
        <h4 className="text-gray-900 font-black text-sm uppercase tracking-tight">Guild Exchange Protocol</h4>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed font-medium">
        Redemptions are processed instantly via the Ale Exchange. Please ensure your wallet is connected to the correct network before finalizing your trade.
        </p>
        </div>
        </section>
        </div>

        </div>
        </div>
    );
}
