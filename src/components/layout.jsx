import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-beer-foam font-sans text-beer-dark">
        <Navbar />
        <main>
        {/* This is where the magic happens: nested pages appear here */}
        <Outlet />
        </main>
        </div>
    );
}
