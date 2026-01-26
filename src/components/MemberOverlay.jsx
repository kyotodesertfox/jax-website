import React from 'react';

export const IridescentOverlay = () => {
    return (
        <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden z-30 opacity-30 group-hover:opacity-60 transition-opacity">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#a2d2ff_0%,#efbbff_25%,#ffb7b2_50%,#cdffd8_75%,#a2d2ff_100%)] mix-blend-overlay animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20" />
        </div>
    );
};
