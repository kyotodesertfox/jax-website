import React from 'react';
import eventData from './events.json';

export default function EventsPage() {
    return (
        <div className="p-10">
        <h1 className="text-4xl font-black text-beer-dark">CALENDAR</h1>
        <p className="text-beer-amber font-bold">Checking the fermenters for upcoming dates...</p>
        </div>
    );
}
