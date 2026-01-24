import React from 'react';
// Importing the JSON directly from the same folder
import eventData from './events.json';

export default function EventsPage() {
    return (

        <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 border-b-4 border-[#FBB117] pb-4">
        <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">
        Upcoming <span className="text-[#FBB117]">Events</span>
        </h1>
        <p className="text-gray-500 font-medium mt-2">
        Automated sync from our Discord community.
        </p>
        </header>

        {/* The Events Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventData.length > 0 ? (
            eventData.map((event) => (
                <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
                >
                <div className="p-6">
                <div className="flex justify-between items-start">
                <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#FBB117] transition-colors">
                {event.name}
                </h2>
                <p className="flex items-center text-gray-600 mt-2 font-medium">
                <span className="mr-2">📍</span> {event.location}
                </p>
                </div>

                {/* Date Badge */}
                <div className="bg-gray-100 rounded-lg p-3 text-center min-w-[80px]">
                <span className="block text-sm font-black uppercase text-gray-500">
                {new Date(event.startTime).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <span className="block text-2xl font-black text-gray-900">
                {new Date(event.startTime).toLocaleDateString('en-US', { day: 'numeric' })}
                </span>
                </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-4 border-gray-50">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Starts at {new Date(event.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </span>
                <button className="text-sm font-bold text-[#FBB117] hover:underline">
                View in Discord →
                </button>
                </div>
                </div>
                </div>
            ))
        ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg font-medium">No events currently scheduled. Check back soon!</p>
            </div>
        )}
        </div>
        </div>

    );
}
