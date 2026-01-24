import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
        <h3 className="text-[#FBB117] font-black uppercase tracking-widest mb-2">
        Jax Ale Exchange
        </h3>
        <p className="text-gray-400 font-medium">
        Jacksonville's home for fermentation, community, and the exchange of craft knowledge.
        </p>
        </div>

        <div className="flex flex-col md:items-end">
        <h3 className="text-[#FBB117] font-black uppercase tracking-widest mb-4">
        Connect
        </h3>
        <div className="flex gap-6 text-2xl">

        <a href="https://discord.gg/qyvXEJuV4" className="hover:text-[#FBB117] transition-colors" title="Discord">
        <span>👾</span>
        </a>
        <a href="https://instagram.com/jacksonvillealeexchange/" className="hover:text-[#FBB117] transition-colors" title="Instagram">
        <span>📸</span>
        </a>
        <a href="https://facebook.com/yourlink" className="hover:text-[#FBB117] transition-colors" title="Facebook">
        <span>👥</span>
        </a>
        </div>
        </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-4 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm font-bold uppercase">
        © {new Date().getFullYear()} Jax Ale Exchange • Brewed on a Raspberry Pi
        </div>
        </footer>
    );
}
