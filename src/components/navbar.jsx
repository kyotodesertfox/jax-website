import React, { useState } from 'react';
import { Beer, Menu, X, User, FlaskConical, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="sticky top-0 z-50 bg-beer-dark border-b-2 border-beer-amber shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-beer-gold p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
        <Beer size={24} className="text-beer-dark" />
        </div>
        <span className="text-beer-gold font-black text-xl tracking-tighter">
        JAX <span className="text-white">ALE EXCHANGE</span>
        </span>
        </Link>

        {/* NAV LINKS (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8">
        {/* Note: I reverted these classes to your original styling */}
        <NavLink to="/recipes" icon={<FlaskConical size={18}/>} label="Recipes" />
        <NavLink to="/events" icon={<Calendar size={18}/>} label="Events" />
        <NavLink to="/members" icon={<User size={18}/>} label="Members" />

        <button className="bg-beer-gold hover:bg-white text-beer-dark px-4 py-2 rounded-full font-bold text-sm transition-colors">
        JOIN CLUB
        </button>
        </div>

        {/* HAMBURGER (MOBILE ONLY) */}
        <div className="md:hidden flex items-center">
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-beer-gold focus:outline-none p-2"
        >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
        </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-beer-dark border-t border-beer-amber/20`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
        <MobileNavLink to="/recipes" icon={<FlaskConical size={20} />} label="Recipes" onClick={closeMenu} />
        <MobileNavLink to="/events" icon={<Calendar size={20} />} label="Events" onClick={closeMenu} />
        <MobileNavLink to="/members" icon={<User size={20} />} label="Members" onClick={closeMenu} />

        <div className="pt-4 px-3">
        <button className="w-full bg-beer-gold text-beer-dark py-3 rounded-xl font-bold">
        JOIN CLUB
        </button>
        </div>
        </div>
        </div>
        </nav>
    );
}

/* Reverted to your EXACT original desktop styles */
function NavLink({ to, icon, label }) {
    return (
        <Link to={to} className="flex items-center gap-2 text-gray-300 hover:text-beer-gold transition-colors font-semibold text-sm">
        {icon}
        {label}
        </Link>
    );
}

function MobileNavLink({ to, icon, label, onClick }) {
    return (
        <Link
        to={to}
        onClick={onClick}
        className="flex items-center gap-4 text-gray-300 hover:text-beer-gold p-3 rounded-lg font-bold text-lg"
        >
        <div className="text-beer-gold">{icon}</div>
        {label}
        </Link>
    );
}
