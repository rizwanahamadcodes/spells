const CardSkeleton = () => {
    return (
        <div className="shadow rounded-0.5 bg-white p-1">
            {/* <div className="w-full h-13 rounded-t-0.5 bg-gray-100 animate-pulse"></div> */}
            <div className="flex flex-col gap-0.5">
                <div className="w-3/4 h-2 bg-gray-100 rounded-0.5 animate-pulse"></div>
                <div className="h-2 w-2/5 bg-gray-100 rounded-0.5 animate-pulse"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;
