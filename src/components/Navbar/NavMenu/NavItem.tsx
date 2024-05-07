"use client";

import clsx from "clsx";
import { NavMenuProps } from "./NavMenu";
import { TabIndicatorBoundsType } from "../TabIndicator";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { Link, LinkProps, matchPath } from "react-router-dom";

type NavItemProps = LinkProps & {
    children: React.ReactNode;
    onNavItemClick?: () => void;
    direction?: NavMenuProps["direction"];
    setTabIndicatorBounds?: Dispatch<SetStateAction<TabIndicatorBoundsType>>;
};

const NavItem = (props: NavItemProps) => {
    const {
        children,
        setTabIndicatorBounds,
        direction = "horizontal",
        onNavItemClick,
        to,
        ...otherProps
    } = props;

    const isLinkActive = matchPath(location.pathname, to as string);

    const navItemRef = useRef<HTMLAnchorElement | null>(null);

    const setTabIndicatorBoundsFromElement = useCallback(
        (el: HTMLElement) => {
            setTabIndicatorBounds &&
                setTabIndicatorBounds({
                    height: el.clientHeight,
                    width: el.clientWidth,
                    left: el.offsetLeft,
                    top: el.offsetTop,
                });
        },
        [setTabIndicatorBounds]
    );

    useEffect(() => {
        const navItem = navItemRef.current;
        if (!navItem) {
            return;
        }
        if (navItemRef.current)
            if (isLinkActive) {
                setTabIndicatorBoundsFromElement(navItem);
            }
    }, [
        direction,
        location.pathname,
        navItemRef,
        setTabIndicatorBoundsFromElement,
    ]);

    const stylesAsPerDirection = {
        horizontal: clsx(
            "px-1.75  hover:bg-gray-50 hover:dark:bg-gray-850/30 h-navHeight-small",
            isLinkActive ? "bg-gray-500/20 dark:bg-gray-500/20" : ""
        ),
        vertical: clsx(
            "h-4 pl-2 border-b border-b-gray-100 dark:border-b-gray-700 dark:hover:bg-gray-750",
            isLinkActive ? "bg-gray-50 dark:bg-gray-750" : ""
        ),
    };

    const handleNavItemClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const clickedNavLink = e.target as HTMLAnchorElement;
        setTabIndicatorBoundsFromElement(clickedNavLink);
    };

    return (
        <Link
            to={to}
            ref={navItemRef}
            onClick={(e) => {
                handleNavItemClick(e);
                onNavItemClick && onNavItemClick();
            }}
            {...otherProps}
            className={clsx(
                "flex items-center text-0.875 font-semibold uppercase tracking-widest transition-all/5",
                stylesAsPerDirection[direction],
                isLinkActive
                    ? "dark:text-primary-200 text-primary-600 hover:dark:text-primary-100 hover:text-primary-800"
                    : "dark:text-gray-300 text-gray-600 hover:text-gray-800 hover:dark:text-gray-100"
            )}>
            {children}
        </Link>
    );
};

export default NavItem;
