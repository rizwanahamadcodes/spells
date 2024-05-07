import clsx from "clsx";
import { useToggle } from "../../hooks/useToggle";
import BrandLogo from "../BrandLogo";
import Container from "../Container/Container";
import FavoritesDrawer from "../Drawers/FavoritesDrawer";
import NavDrawer from "../Drawers/NavDrawer";
import FavoritesIcon from "../FavoritesIcon";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";

const Navbar = () => {
    const {
        isOpen: isFavoritesOpen,
        close: closeFavorites,
        open: openFavorites,
    } = useToggle(false);

    return (
        <div>
            <nav
                className={clsx(
                    "fixed top-0 z-10 w-full bg-white/50 backdrop-blur-sm transition-all dark:bg-gray-900/50 h-navHeight-large shadow"
                )}>
                <Container className="h-full flex items-center justify-between gap-2">
                    <BrandLogo />
                    <NavMenuWithTabIndicator className="ml-auto hidden lg:block" />
                    <FavoritesIcon open={openFavorites} />
                    <NavDrawer />
                    <FavoritesDrawer
                        isOpen={isFavoritesOpen}
                        close={closeFavorites}
                        open={openFavorites}
                    />
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
