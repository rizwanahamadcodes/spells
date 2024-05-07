import clsx from "clsx";
import { useToggle } from "../../hooks/useToggle";
import BrandLogo from "../BrandLogo";
import Container from "../Container/Container";
import Drawer, {
    DrawerBody,
    DrawerDefaultHead,
    DrawerFoot,
} from "../Drawer/Drawer";
import NavDrawer from "../Drawers/NavDrawer";
import FavoritesIcon from "../FavoritesIcon";
import NavMenuWithTabIndicator from "./NavMenuWithTabIndicator";
import { useSelector } from "react-redux";
import SpellCard from "../SpellCard";
import { selectAllFavorites } from "../../store/slices/favoritesSlice";
import { RootState } from "../../store/store";
import pathConstants from "../../routes/pathConstants";
import { button } from "../Button";
import { Link } from "react-router-dom";

const Navbar = () => {
    const {
        isOpen: isFavoritesOpen,
        close: closeFavorites,
        open: openFavorites,
    } = useToggle(false);

    const favoriteSpells = useSelector((state: RootState) =>
        selectAllFavorites(state)
    );

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

                    <Drawer
                        isOpen={isFavoritesOpen}
                        close={closeFavorites}
                        open={openFavorites}>
                        <DrawerDefaultHead height={"h-navHeight"} />
                        <DrawerBody
                            className="bg-gray-50 flex flex-col gap-1"
                            defaultPadding>
                            {favoriteSpells.map((spell) => (
                                <SpellCard key={spell.index} spell={spell} />
                            ))}
                        </DrawerBody>
                        <DrawerFoot className="flex flex-row justify-between gap-0.5">
                            {favoriteSpells.length != 0 && (
                                <div className="flex justify-between font-medium">
                                    <p className="text-gray-900 mr-0.5  font-medium">
                                        {favoriteSpells.length}
                                    </p>
                                    <p className="text-gray-700 font-medium">
                                        Favorites
                                    </p>
                                </div>
                            )}
                            <Link
                                onClick={closeFavorites}
                                to={pathConstants.FAVORITES}
                                className={button()}>
                                View All
                            </Link>
                        </DrawerFoot>
                    </Drawer>
                </Container>
            </nav>
        </div>
    );
};

export default Navbar;
