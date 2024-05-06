import clsx from "clsx";
import Container from "../Container/Container";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";
import NavDrawer from "../NavDrawer/NavDrawer";
import BrandLogo from "../BrandLogo";

type NavbarProps = {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
};

const Navbar = (props: NavbarProps) => {
    const { viewportTouchingStatus } = props;

    return (
        <div>
            <nav
                className={clsx(
                    "fixed top-0 z-10 w-full bg-white/50 backdrop-blur-sm transition-all dark:bg-gray-900/50",
                    viewportTouchingStatus?.topTouchedTop
                        ? "h-navHeight-large"
                        : "h-navHeight-small shadow"
                )}>
                <Container className="h-full flex items-center justify-between">
                    <BrandLogo />
                    <NavMenuWithTabIndicator className="hidden lg:block" />
                    <NavDrawer />
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
