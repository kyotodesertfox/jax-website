import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Award, ChevronLeft, ChevronRight } from 'lucide-react';


import { CardFlip, ShinyOverlay, IridescentOverlay } from '/src/components/MemberOverlay';


export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 8;
  const [hoveredMember, setHoveredMember] = useState(null);

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
      /* 1. Perspective Wrapper - Required for 3D depth */
      <div
      key={member.hash}
      className="bg-transparent h-[320px] [perspective:1000px]"
      onMouseEnter={() => setHoveredMember(member.hash)}
      onMouseLeave={() => setHoveredMember(null)}
      onClick={() => setHoveredMember(hoveredMember === member.hash ? null : member.hash)}

      >


      {/* 2. Inner Mover - Rotates based on hoveredMember state */}
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${hoveredMember === member.hash ? '[transform:rotateY(180deg)]' : ''}`}>

      {member.isShiny && ( <>  <ShinyOverlay /> <IridescentOverlay /> </> )}



        {/* FRONT FACE */}
        <div className="absolute inset-0 h-full w-full bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm [backface-visibility:hidden]">
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

        {/* BACK FACE - Shown when rotated */}
        <div className="absolute inset-0 h-full w-full bg-gray-900 border-2 border-[#FBB117] rounded-xl p-6 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center">
          <h3 className="text-[#FBB117] font-black uppercase tracking-tight text-xl">
            Member Profile

          </h3>


          <div className="mt-4 space-y-2">
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Favorite Style</div>
            <div className="text-white text-sm font-mono bg-gray-800 p-2 rounded border border-gray-700">
            Login to Set
            </div>
          </div>


          <div className="mt-4 space-y-2">
          <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Favorite Beer</div>
          <div className="text-white text-sm font-mono bg-gray-800 p-2 rounded border border-gray-700">
          Login to Set
          </div>
          </div>

          <div className="mt-6 text-[9px] text-gray-500 uppercase font-black">Status: <span className="text-green-500" > {member.status || 'Verified'}</span>
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
