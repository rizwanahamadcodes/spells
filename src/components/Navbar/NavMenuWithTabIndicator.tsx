import clsx from "clsx";
import NavMenu, { NavMenuProps } from "./NavMenu/NavMenu";
import TabIndicator, { useTabIndicator } from "./TabIndicator";

type NavMenuWithTabIndicatorProps = {
    direction?: NavMenuProps["direction"];
    className?: string;
    onNavItemClick?: () => void;
};

const NavMenuWithTabIndicator = (props: NavMenuWithTabIndicatorProps) => {
    const { direction = "horizontal", onNavItemClick, className } = props;
    const { tabIndicatorBounds, setTabIndicatorBounds } = useTabIndicator({
        top: 0,
        left: 0,
        height: 16 * 4,
        width: 100,
    });

    return (
        <div className={clsx("relative", className)}>
            <NavMenu
                onNavItemClick={onNavItemClick}
                direction={direction}
                setTabIndicatorBounds={setTabIndicatorBounds}
            />
            <TabIndicator
                direction={direction}
                tabIndicatorBounds={tabIndicatorBounds}
            />
        </div>
    );
};

export default NavMenuWithTabIndicator;
