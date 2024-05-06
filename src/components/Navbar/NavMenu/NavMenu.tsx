import { Dispatch, SetStateAction } from "react";
import { TabIndicatorBoundsType } from "../TabIndicator";
import NavItem from "./NavItem";
import clsx from "clsx";

export type NavMenuProps = {
    onNavItemClick?: () => void;
    direction?: "horizontal" | "vertical";
    setTabIndicatorBounds?: Dispatch<SetStateAction<TabIndicatorBoundsType>>;
};

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Spells", path: "/spells" },
    { label: "Favorites", path: "/favorites" },
];

const NavMenu = (props: NavMenuProps) => {
    const {
        direction = "horizontal",
        setTabIndicatorBounds,
        onNavItemClick,
    } = props;
    const stylesAsPerDirection = {
        horizontal: "flex-row",
        vertical: "flex-col",
    };

    return (
        <ul className={clsx("flex", stylesAsPerDirection[direction])}>
            {navLinks.map((navLink) => {
                return (
                    <li key={navLink.path}>
                        <NavItem
                            onNavItemClick={onNavItemClick}
                            setTabIndicatorBounds={setTabIndicatorBounds}
                            direction={direction}
                            to={navLink.path}>
                            {navLink.label}
                        </NavItem>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavMenu;
