import React from "react";

type SpellsGridProps = {
    children: React.ReactNode;
};

const SpellsGrid = (props: SpellsGridProps) => {
    const { children } = props;

    return (
        <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-3">
            {children}
        </div>
    );
};

export default SpellsGrid;
