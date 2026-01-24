import { Beer, Menu, User, FlaskConical, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-beer-dark border-b-2 border-beer-amber shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-beer-gold p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
        <Beer size={24} className="text-beer-dark" />
        </div>
        <span className="text-beer-gold font-black text-xl tracking-tighter">
        BREW<span className="text-white">LAB</span>
        </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
        <NavLink to="/recipes" icon={<FlaskConical size={18}/>} label="Recipes" />
        <NavLink to="/events" icon={<Calendar size={18}/>} label="Events" />
        <NavLink to="/members" icon={<User size={18}/>} label="Members" />

        <button className="bg-beer-gold hover:bg-white text-beer-dark px-4 py-2 rounded-full font-bold text-sm transition-colors">
        JOIN CLUB
        </button>
        </div>

        <div className="md:hidden text-beer-gold">
        <Menu size={28} />
        </div>
        </div>
        </div>
        </nav>
    );
}

function NavLink({ to, icon, label }) {
    return (
        <Link to={to} className="flex items-center gap-2 text-gray-300 hover:text-beer-gold transition-colors font-semibold text-sm">
        {icon}
        {label}
        </Link>
    );
}
