import React from 'react';

export const ShinyOverlay = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        {/* Large Corner Stars */}
        <span className="absolute top-2 left-4 text-[#FBB117] text-2xl animate-intense" style={{ '--speed': '2s', animationDelay: '0.2s' }}>✦</span>
        <span className="absolute bottom-4 right-4 text-[#FBB117] text-2xl animate-intense" style={{ '--speed': '2.5s', animationDelay: '1.2s' }}>✦</span>

        {/* Mid-sized Scatter */}
        <span className="absolute top-1/2 left-2 text-[#FBB117] text-lg animate-intense" style={{ '--speed': '1.8s', animationDelay: '0.5s' }}>✧</span>
        <span className="absolute top-10 right-6 text-[#FBB117] text-lg animate-intense" style={{ '--speed': '3s', animationDelay: '2s' }}>✧</span>

        {/* Small Twinkles */}
        <span className="absolute bottom-16 left-10 text-[#FBB117] text-xs animate-intense" style={{ '--speed': '1.5s', animationDelay: '0.7s' }}>✦</span>
        <span className="absolute top-1/3 right-1/4 text-[#FBB117] text-xs animate-intense" style={{ '--speed': '2.2s', animationDelay: '1.5s' }}>✦</span>

        {/* The Extra "Pop" - A central glow that pulses */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FBB117]/5 via-transparent to-[#FBB117]/10 animate-pulse" />
        </div>
    );
};
