const SpellDetailsSkeleton = () => {
    return (
        <div className="rounded-0.5 w-full p-1 max-w-3xl bg-white flex flex-col gap-1">
            <div className="w-2/4 h-2 bg-gray-100 rounded-0.5 animate-pulse"></div>
            <div className="w-full h-7 bg-gray-100 rounded-0.5 animate-pulse"></div>
        </div>
    );
};

export default SpellDetailsSkeleton;
