'use client';

import React, { useState } from 'react';
import { ArrowDown, Wallet, Info, Beer } from 'lucide-react';

export default function AleSwap() {
    const [amount, setAmount] = useState('');
    const [targetType, setTargetType] = useState('CREDITS');

    return (
        <main className="container mx-auto px-6 py-10 max-w-2xl">
        <div className="flex flex-col gap-6">

        {/* Header Section */}
        <section>
        <h1 className="text-4xl font-serif font-bold tracking-tight text-[#DAA520]">
        $BEER Redemption
        </h1>
        <p className="text-gray-400 mt-2 italic">
        Redeem your Contributions for $Beer Credits or Digital Assets
        </p>
        </section>

        {/* Swap Card */}
        <section className="bg-[#161616] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-visible">

        {/* Decorative Hops (Reusing our Absolute logic) */}
        <div className="absolute -top-6 -right-6 w-16 h-16 opacity-40">
        <img src="/hop-asset.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="flex flex-col gap-2">

        {/* Input Section (Contribution Points) */}
        <div className="bg-black/40 border border-white/5 p-4 rounded-2xl">
        <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500 font-medium">Deposit Points</span>
        <span className="text-xs text-gray-500 flex items-center gap-1">
        <Wallet size={12} /> Balance: 0.00
        </span>
        </div>
        <div className="flex justify-between items-center">
        <input
        type="number"
        placeholder="0.0"
        className="bg-transparent text-2xl font-bold text-white outline-none w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <div className="bg-zinc-800 px-3 py-1.5 rounded-xl flex items-center gap-2 border border-zinc-700">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-[#DAA520]" />
        <span className="font-bold text-white">$BEER</span>
        </div>
        </div>
        </div>

        {/* Visual Divider / Arrow */}
        <div className="flex justify-center -my-4 z-10">
        <div className="bg-[#161616] border border-white/10 p-2 rounded-xl text-[#DAA520] shadow-lg">
        <ArrowDown size={20} />
        </div>
        </div>

        {/* Output Section (Credits/Tokens) */}
        <div className="bg-black/40 border border-white/5 p-4 rounded-2xl">
        <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500 font-medium">You Receive (Estimated)</span>
        </div>
        <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-400">
        {(amount * 0.85).toFixed(2)}
        </div>
        <div className="flex gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
        <button
        onClick={() => setTargetType('CREDITS')}
        className={`px-3 py-1 rounded-lg text-xs font-black transition ${targetType === 'CREDITS' ? 'bg-[#DAA520] text-black' : 'text-gray-500 hover:text-gray-300'}`}
        >
        $USDC
        </button>
        <button
        onClick={() => setTargetType('TOKEN')}
        className={`px-3 py-1 rounded-lg text-xs font-black transition ${targetType === 'TOKEN' ? 'bg-[#DAA520] text-black' : 'text-gray-500 hover:text-gray-300'}`}
        >
        $ETH
        </button>
        </div>
        </div>
        </div>

        {/* Swap Button */}
        <button className="w-full mt-4 bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-600 hover:to-amber-400 text-black font-black py-4 rounded-2xl transition-all shadow-lg shadow-amber-900/20 active:scale-[0.98] uppercase tracking-tighter">
        Swap $BEER
        </button>
        </div>
        </section>

        {/* Protocol Info Section - Themed to "Guild Rules" */}
        <section className="bg-amber-900/5 border border-amber-500/10 rounded-2xl p-4 flex gap-4 items-start">
        <div className="text-amber-500 mt-1">
        <Info size={20} />
        </div>
        <div>
        <h4 className="text-amber-500 font-bold text-sm uppercase tracking-wide">Jax Ale Exchange Rules</h4>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
        Exchange rates are determined by the Brewery Reserve. Tokens can be used for taproom purchases, while Tokens represent your stake in the Jax Ale Exchange marketplace.
        </p>
        </div>
        </section>
        </div>
        </main>
    );
}
