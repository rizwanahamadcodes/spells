import clsx from "clsx";
import { DrawerContext, useDrawerProps } from "./useDrawerProps";
import { useCallback, useEffect, useRef } from "react";
import CloseButton from "../CloseButton/CloseButton";
import BrandLogo from "../BrandLogo";

export type DrawerProps = {
    children: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle?: () => void;
    className?: string;
};

const Drawer = (props: DrawerProps) => {
    const { className, children, isOpen, open, close, toggle } = props;
    const staticClose = useCallback(() => {
        close();
    }, []);

    useEffect(() => {
        staticClose();
    }, [location.pathname, staticClose]);

    return (
        <DrawerContext.Provider value={{ isOpen, open, close, toggle }}>
            <DrawerWrapper className={className}>
                <DrawerMain>{children}</DrawerMain>
            </DrawerWrapper>
        </DrawerContext.Provider>
    );
};

type DrawerWrapperProps = { children: React.ReactNode; className?: string };

export const DrawerWrapper = (props: DrawerWrapperProps) => {
    const { children, className } = props;
    const { isOpen, close } = useDrawerProps();

    const handleDrawerWrapperClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };

    return (
        <div
            onClick={(e) => {
                handleDrawerWrapperClick(e);
            }}
            className={clsx(
                "h-[100dvh] w-[100dvw] absolute top-0 left-0 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm z-[1000] overflow-hidden transition-all",
                isOpen ? "visible opacity-100" : "invisible opacity-0",
                className
            )}>
            {children}
        </div>
    );
};

type DrawerMainProps = { children: React.ReactNode };

export const DrawerMain = (props: DrawerMainProps) => {
    const { children } = props;
    const { isOpen } = useDrawerProps();
    const drawerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={drawerRef}
            className={clsx(
                "w-20 flex flex-col h-full dark:bg-gray-800 bg-white absolute top-0 right-0 shadow-left overflow-hidden border-l border-l-gray-100 dark:border-l-gray-700",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
            {children}
        </div>
    );
};

type DrawerHeadProps = {
    height?: string;
    className?: string;
    children: React.ReactNode;
};

export const DrawerHead = (props: DrawerHeadProps) => {
    const { height = "h-navHeight-large", className, children } = props;

    return (
        <div
            className={clsx(
                "shrink-0 w-full border-b border-b-gray-100 dark:border-b-gray-700 flex items-center transition-all",
                height,
                className
            )}>
            {children}
        </div>
    );
};

type DrawerDefaultHeadProps = { height?: string; defaultPadding?: boolean };

export const DrawerDefaultHead = (props: DrawerDefaultHeadProps) => {
    const { height = "h-navHeight-large", defaultPadding = true } = props;
    const { close } = useDrawerProps();

    return (
        <DrawerHead
            height={height}
            className={clsx(
                "justify-between",
                defaultPadding ? "px-[7vw]" : ""
            )}>
            <BrandLogo />
            <CloseButton onClick={close} />
        </DrawerHead>
    );
};

type DrawerBodyProps = {
    className?: string;
    children: React.ReactNode;
    defaultPadding?: boolean;
};

export const DrawerBody = (props: DrawerBodyProps) => {
    const { children, defaultPadding = false, className } = props;

    return (
        <div
            className={clsx(
                "grow overflow-y-auto",
                defaultPadding ? "px-2 py-1" : "",
                className
            )}>
            {children}
        </div>
    );
};

type DrawerFootProps = {
    className: string;
    children: React.ReactNode;
    defaultPadding?: boolean;
};

export const DrawerFoot = (props: DrawerFootProps) => {
    const { className, children, defaultPadding = true } = props;

    return (
        <div
            className={clsx(
                "shrink-0 w-full border-t border-t-gray-100 h-navHeight flex items-center",
                defaultPadding ? "px-2" : "",
                className
            )}>
            {children}
        </div>
    );
};

export default Drawer;
