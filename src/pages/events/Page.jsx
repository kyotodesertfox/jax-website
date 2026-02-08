import React from 'react';
// Importing the JSON directly from the same folder
import eventData from './events.json';

const getEventStatus = (startTime, endTime) => {
    if (!startTime) return 'upcoming';

    const now = new Date();
    const start = new Date(startTime);

    // If no end time exists, we'll assume a 3-hour window for the UI logic
    const end = endTime
    ? new Date(endTime)
    : new Date(start.getTime() + (3 * 60 * 60 * 1000));

    if (now < start) return 'upcoming';
    if (now > end) return 'past';
    return 'ongoing';
};

export default function EventsPage() {
    return (
        <div className="bg-gray-50 py-12 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 border-b-8 border-[#FBB117] pb-6 flex flex-col md:flex-row justify-between items-end">
        <div className="w-full md:w-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900">
        Upcoming <span className="text-[#FBB117]">Events</span>
        </h1>
        <p className="text-gray-600 font-bold mt-2 uppercase tracking-widest text-sm italic">
        What we are doing in the community
        </p>
        </div>
        </header>

        {/* The Events Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Increased gap for floating room */}
        {eventData.length > 0 ? (
            eventData.map((event) => {
                const status = getEventStatus(event.startTime, event.endTime);
                const isLive = status === 'ongoing';

                return (
                    <div
                    key={event.id}
                    className={`relative bg-white border rounded-xl transition-all duration-700 group
                        ${isLive
                            ? 'border-[#FBB117] shadow-[0_20px_50px_rgba(251,177,23,0.15)] scale-[1.01]'
                : 'border-gray-200 shadow-sm opacity-90'}`}
                >
                {/* CONDITIONAL FLOATING HOPS */}
                {isLive && (
                    <>
                    {/* Top Left Hop */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 pointer-events-none z-10 animate-random-1">
                    <img src="/hop-asset.png" alt="" className="w-full h-full object-contain opacity-80" />
                    </div>
                    {/* Bottom Right Hop */}
                    <div className="absolute -bottom-8 -right-4 w-16 h-16 pointer-events-none z-10 animate-random-2">
                    <img src="/hop-asset.png" alt="" className="w-full h-full object-contain opacity-60 blur-[0.5px]" />
                    </div>
                    </>
                )}

                <div className="p-6 bg-white rounded-xl relative z-20">
                <div className="flex justify-between items-start">
                <div className="flex-1">
                <h2 className={`text-2xl font-bold transition-colors ${isLive ? 'text-[#FBB117]' : 'text-gray-900'}`}>
                {event.name}
                </h2>
                <p className="flex items-center text-gray-600 mt-2 font-medium">
                <span className="mr-2 text-[#FBB117]">📍</span> {event.location}
                </p>
                </div>

                {/* Date Badge */}
                <div className={`rounded-lg p-3 text-center min-w-[80px] transition-colors ${isLive ? 'bg-orange-50' : 'bg-gray-100'}`}>
                <span className="block text-sm font-black uppercase text-gray-500">
                {new Date(event.startTime).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <span className="block text-2xl font-black text-gray-900">
                {new Date(event.startTime).toLocaleDateString('en-US', { day: 'numeric' })}
                </span>
                </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-4 border-gray-100">
                <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Starts at {new Date(event.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </span>
                {isLive && (
                    <span className="text-[10px] font-black text-[#FBB117] animate-pulse">● HAPPENING NOW</span>
                )}
                </div>

                <div className="flex items-center gap-1.5 text-[#FBB117] text-[14px] font-bold uppercase whitespace-nowrap">
                <span className="text-gray-300 mr-1">Join:</span>
                <a className="hover:underline" href={event.url} target="_blank" rel="noopener noreferrer">Web</a>
                <span className="text-gray-300">|</span>
                <a className="hover:underline" href={event.app_url} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 127.14 96.36" fill="currentColor" className="inline ml-1">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.39,80.21a105.73,105.73,0,0,0,32.77,16.15,77.7,77.7,0,0,0,7.33-11.86,67.42,67.42,0,0,1-11.64-5.54c.9-.66,1.76-1.39,2.59-2.14a73.74,73.74,0,0,0,63.41,0c.83.75,1.69,1.48,2.59,2.14a67.05,67.05,0,0,1-11.65,5.54,76.69,76.69,0,0,0,7.36,11.89,105,105,0,0,0,32.79-16.15C129.92,52.45,120.34,28.98,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5.07-12.71,11.41-12.71S54,46,53.86,53,48.74,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.07-12.71,11.41-12.71S96.1,46,96,53,90.89,65.69,84.69,65.69Z"/>
                </svg>
                </a>
                </div>
                </div>
                </div>
                </div>
                );
            })
        ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg font-medium">No events currently scheduled. Check back soon!</p>
            </div>
        )}
        </div>
        </div>
        </div>
    );
}
