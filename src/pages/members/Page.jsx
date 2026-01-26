import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Award, ChevronLeft, ChevronRight } from 'lucide-react';


import { ShinyOverlay } from '/src/components/MemberOverlay';

import { IridescentOverlay } from '/src/components/MemberOverlay';


export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 8;

  useEffect(() => {
    fetch('/members/members.json')
    .then(res => res.json())
    .then(data => setMembers(data))
    .catch(err => console.error("Roster error:", err));
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(members.length / membersPerPage);
  const currentMembers = members.slice(
    (currentPage - 1) * membersPerPage,
                                       currentPage * membersPerPage
  );

  return (
    <div className="bg-gray-50 py-12 px-4">
    <div className="max-w-6xl mx-auto">

    {/* Header Section */}
    <header className="mb-12 border-b-8 border-[#FBB117] pb-6 flex flex-col md:flex-row justify-between items-end">
    <div className="w-full md:w-auto">
    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900">
    Club <span className="text-[#FBB117]">Roster</span>
    </h1>
    <p className="text-gray-600 font-bold mt-2 uppercase tracking-widest text-sm italic">
    Our Homebrewers • Jax Ale Exchange
    </p>
    </div>
    {totalPages > 1 && (
      <div className="text-right hidden md:block">
      <span className="text-3xl font-black text-gray-200 uppercase tracking-tighter">
      {currentPage} / {totalPages}
      </span>
      </div>
    )}
    </header>

    {/* Member Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {currentMembers.map((member) => (

      <div
      key={member.hash}
      className={`bg-white border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-all relative group ${member.isShiny ? 'border-[#FBB117]' : 'border-gray-200' }`}
      >

      {member.isShiny && ( <>  <ShinyOverlay /> <IridescentOverlay /> </> )}


      {/* Avatar */}
      <div className="flex justify-center mb-4">
      <div className="relative">
      <img
      src={`/members/icons/${member.hash}.png`}
      alt="Member Icon"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://ui-avatars.com/api/?background=FBB117&color=000&name=${member.name}`;
      }}
      className="w-24 h-24 rounded-full border-4 border-[#FBB117] object-cover"
      />
      {member.role === 'Admin' && (
        <div className="absolute bottom-0 right-0 bg-red-600 text-white p-1 rounded-full border-2 border-white">
        <ShieldCheck size={14} />
        </div>
      )}
      </div>
      </div>

      {/* Identity Info */}
      <div className="text-center">
      <h3 className="text-gray-900 font-black uppercase tracking-tight text-lg truncate">
      {member.name}
      </h3>
      <div className="flex items-center justify-center gap-1 mt-1">
      <Award size={14} className="text-[#FBB117]" />
      <span className="text-xs font-bold uppercase text-gray-500">
      {member.role}
      </span>
      </div>

      {/* Industrial Metadata */}
      <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">
      JOINED {member.joined}
      </div>
      </div>
      </div>
      </div>
    ))}
    </div>

    {/* Pagination Navigation */}
    {totalPages > 1 && (
      <div className="mt-12 flex justify-center items-center gap-4">
      <button
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="p-2 border-2 border-gray-900 rounded-lg disabled:opacity-20 hover:bg-[#FBB117] transition-colors"
      >
      <ChevronLeft size={24} />
      </button>

      <div className="flex gap-2">
      {[...Array(totalPages)].map((_, i) => (
        <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`w-10 h-10 font-black rounded-lg border-2 transition-all ${
          currentPage === i + 1
          ? 'bg-gray-900 text-[#FBB117] border-gray-900'
          : 'bg-white text-gray-400 border-gray-200 hover:border-gray-900'
        }`}
        >
        {i + 1}
        </button>
      ))}
      </div>

      <button
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="p-2 border-2 border-gray-900 rounded-lg disabled:opacity-20 hover:bg-[#FBB117] transition-colors"
      >
      <ChevronRight size={24} />
      </button>
      </div>
    )}

    {/* No Data State */}
    {members.length === 0 && (
      <div className="text-center py-20 bg-white rounded-3xl border-4 border-dashed border-gray-200">
      <User size={48} className="mx-auto text-gray-300 mb-4" />
      <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Brewing the Roster...</h2>
      </div>
    )}

    </div>
    </div>
  );
}
