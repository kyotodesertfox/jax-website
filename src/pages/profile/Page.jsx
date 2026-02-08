import React, { useState, useEffect } from 'react';

export default function ProfilePage() {
    const [discordUser, setDiscordUser] = useState(null);

    useEffect(() => {
        // For now, we fetch the data we stored during the callback
        const savedUser = localStorage.getItem('discord_user');
        if (savedUser) {
            setDiscordUser(JSON.parse(savedUser));
        }
    }, []);

    if (!discordUser) {
        return (
            <div className="min-h-screen bg-beer-dark text-white p-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-beer-gold">Profile Not Loaded</h2>
            <p className="mt-2">Please log in to see your exchange stats.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-beer-dark text-white p-10">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <div className="flex items-center gap-6">
        {/* Discord Avatar */}
        <img
        src={`https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-beer-gold shadow-lg"
        />
        <div>
        <h1 className="text-4xl font-black text-beer-gold uppercase tracking-tighter">
        {discordUser.global_name || discordUser.username}
        </h1>
        <p className="text-gray-400">Brewmaster Level: Enthusiast</p>
        </div>
        </div>

        {/* We can add stats, badges, and trade history here */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Trades" value="12" />
        <StatCard label="Beer Credits" value="450" />
        <StatCard label="Rank" value="#4" />
        </div>
        </div>
        </div>
    );
}

function StatCard({ label, value }) {
    return (
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
        <p className="text-xs text-gray-500 uppercase font-bold">{label}</p>
        <p className="text-2xl font-black text-white">{value}</p>
        </div>
    );
}
