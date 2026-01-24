import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="py-12 px-4">
        {/* The Brewery Manifest Container */}
        <section className="max-w-4xl mx-auto">
        <div className="relative bg-white border-t-8 border-[#FBB117] shadow-2xl rounded-b-lg p-8 md:p-12">

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-6">
        The <span className="text-[#FBB117]">Craft</span> & The Community
        </h2>

        <div className="prose prose-lg text-gray-700 font-medium leading-relaxed">
        <p className="mb-4 text-xl">
        Our club was founded on a simple yet powerful principle: Have fun and brew better beer. We believe that homebrewing is more than just a hobby—it’s a community where creativity, camaraderie, and the love of great beer unite people from every walk of life. From beginners learning the basics to seasoned experts exploring advanced techniques, we work together through friendly competitions, collaborative feedback, and open knowledge-sharing to keep improving each other’s brews.</p>

        <p className="mb-4 text-xl">
        We love tasting and talking about all things beer—whether it’s a fresh batch from one of our members or a commercial example that inspires our next recipe. Every gathering is an opportunity to learn, experiment, and celebrate the craft. Above all, we aim to create a fun, supportive environment where every member feels encouraged to share ideas and push their brewing to the next level.</p>

        <p className="mb-4 text-xl">
        Looking ahead, we plan to become a premier homebrewing club in Florida by fostering a welcoming spirit and participating in competitions at every level. Our vision is to secure the title of Florida’s Homebrew Club by 2026, not just through awards, but by expanding our membership, deepening our collective expertise, and staying true to our founding mission: have fun and brew better beer. We’d love for you to join us on this exciting journey. Cheers!</p>

        <p className="mb-6">
        This site is our digital taproom—powered by a Raspberry Pi and synced directly
        from our Discord community. Whether you're a master of the mash tun or just starting
        your first five-gallon batch, you're in the right place.
        </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

        <Link to="/events" className="bg-[#FBB117] text-black font-black py-3 px-8 uppercase tracking-widest hover:bg-black hover:text-[#FBB117] transition-all duration-300 shadow-md">
        View Event Calendar</Link>

        { /*
        <a href="/events" className="bg-[#FBB117] text-black font-black py-3 px-8 uppercase tracking-widest hover:bg-black hover:text-[#FBB117] transition-all duration-300 shadow-md">
        View Event Calendar
        </a>
        <a href="https://discord.gg/yourlink" target="_blank" rel="noreferrer" className="border-2 border-gray-900 text-gray-900 font-black py-3 px-8 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
        Join Discord
        </a> */ }
        </div>
        </div>
        </section>
        </div>
    );
}
