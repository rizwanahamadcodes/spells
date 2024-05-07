import clsx from "clsx";
import Container from "../Container/Container";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";
import NavDrawer from "../Drawers/NavDrawer";
import BrandLogo from "../BrandLogo";
import CartIcon from "../CartIcon";
import { useToggle } from "../../hooks/useToggle";
import Drawer, { DrawerBody, DrawerDefaultHead } from "../Drawer/Drawer";

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
                    <CartIcon open={openFavorites} />
                    <NavDrawer />

                    <Drawer
                        isOpen={isFavoritesOpen}
                        close={closeFavorites}
                        open={openFavorites}>
                        <DrawerDefaultHead height={"h-navHeight"} />
                        <DrawerBody>
                            hello
                            {/* <NavMenuWithTabIndicator
                                onNavItemClick={close}
                                direction="vertical"
                            /> */}
                        </DrawerBody>
                    </Drawer>
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
