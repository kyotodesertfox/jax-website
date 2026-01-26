// MemberOverlays.jsx
export const CardFlip = () => {
    return (
        // We add opacity-0 (hidden by default)
        // and group-hover:opacity-100 (show when card is hovered)
        <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute top-2 left-4 text-[#FBB117] animate-pulse">✦</span>
        </div>
    );
};
