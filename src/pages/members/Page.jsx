import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Award, Beer } from 'lucide-react';

export default function MembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Assuming your bot pushes members.json to the public folder
    fetch('/members.json')
    .then(res => res.json())
    .then(data => setMembers(data))
    .catch(err => console.error("Error loading members:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
    <div className="max-w-6xl mx-auto">

    {/* Header */}
    <header className="mb-12 border-b-4 border-[#FBB117] pb-6">
    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900">
    Club <span className="text-[#FBB117]">Roster</span>
    </h1>
    <p className="text-gray-600 font-bold mt-2 uppercase tracking-widest text-sm">
    The Brewers & Artisans of Jax Ale Exchange
    </p>
    </header>

    {/* Member Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {members.map((member) => (
      <div key={member.hash} className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">

      {/* Accent Decoration */}
      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
      <Beer size={40} className="text-gray-900" />
      </div>

      {/* Avatar Section */}
      <div className="flex justify-center mb-4">
      <div className="relative">
      <img
      src={`/members/icons/${member.hash}.png`}
      alt="Member Icon"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://ui-avatars.com/api/?background=FBB117&color=000&name=JAX";
      }}
      className="w-24 h-24 rounded-full border-4 border-[#FBB117] object-cover shadow-md"
      />
      {member.role === 'Admin' && (
        <div className="absolute bottom-0 right-0 bg-red-600 text-white p-1 rounded-full border-2 border-white">
        <ShieldCheck size={16} />
        </div>
      )}
      </div>
      </div>

      {/* Info Section */}
      <div className="text-center">
      <h3 className="text-gray-900 font-black uppercase tracking-tight text-lg truncate">
      {/* Using the hash prefix as a nickname placeholder if real names are hidden */}
      Member #{member.hash.substring(0, 4)}
      </h3>

      <div className="flex items-center justify-center gap-1 mt-1">
      <Award size={14} className="text-[#FBB117]" />
      <span className="text-xs font-bold uppercase text-gray-500 tracking-tighter">
      {member.role || "Homebrewer"}
      </span>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
      Joined {member.joined}
      </p>
      </div>
      </div>
      </div>
    ))}
    </div>

    {/* Empty State */}
    {members.length === 0 && (
      <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
      <User size={48} className="mx-auto text-gray-300 mb-4" />
      <h2 className="text-xl font-bold text-gray-400 uppercase">Awaiting Discord Sync...</h2>
      </div>
    )}
    </div>
    </div>
  );
}
