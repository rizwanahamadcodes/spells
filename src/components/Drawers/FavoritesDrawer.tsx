import { useSelector } from "react-redux";
import Drawer, {
    DrawerBody,
    DrawerDefaultHead,
    DrawerFoot,
    DrawerProps,
} from "../Drawer/Drawer";
import { RootState } from "../../store/store";
import { selectAllFavorites } from "../../store/slices/favoritesSlice";
import SpellCard from "../SpellCard";
import { Link } from "react-router-dom";
import pathConstants from "../../routes/pathConstants";
import { button } from "../Button";

type FavoritesDrawerProps = DrawerProps;

const FavoritesDrawer = (props: FavoritesDrawerProps) => {
    const {
        isOpen: isFavoritesOpen,
        close: closeFavorites,
        open: openFavorites,
    } = props;

    const favoriteSpells = useSelector((state: RootState) =>
        selectAllFavorites(state)
    );
    return (
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
                        <p className="text-gray-700 font-medium">Favorites</p>
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
    );
};

export default FavoritesDrawer;
