const SpellDetailsSkeleton = () => {
    return (
        <div className="rounded-0.5 w-full p-1 max-w-3xl bg-white flex flex-col gap-1">
            <div className="w-2/4 h-2 bg-gray-100 rounded-0.5 animate-pulse"></div>

            <div className="w-full h-7 bg-gray-100 rounded-0.5 animate-pulse"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                {Array(7)
                    .fill(null)
                    .map((bone) => (
                        <div
                            key={bone}
                            className="w-full h-2 bg-gray-100 rounded-0.5 animate-pulse"></div>
                    ))}
            </div>
        </div>
    );
};

export default SpellDetailsSkeleton;
