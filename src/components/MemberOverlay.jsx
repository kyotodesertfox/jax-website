// MemberOverlays.jsx
import React from 'react';

export const CardFlip = () => {
    return (
        // We add opacity-0 (hidden by default)
        // and group-hover:opacity-100 (show when card is hovered)
        <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute top-2 left-4 text-[#FBB117] animate-pulse">✦</span>
        </div>
    );
};

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
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FBB117]/5 via-transparent to-[#FBB117]/10 animate-pulse" /></div>
    );
};

export const IridescentOverlay = () => {
    return (
        <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden z-30 opacity-30 group-hover:opacity-60 transition-opacity">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#a2d2ff_0%,#efbbff_25%,#ffb7b2_50%,#cdffd8_75%,#a2d2ff_100%)] mix-blend-overlay animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20" />
        </div>
    );
};
