import Button, { ButtonIcon } from "./Button";
import { DrawerProps } from "./Drawer/Drawer";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/rootReducer";
// import { selectNoOfItemsInFavorites } from "../../store/slices/favoritesSlice";
// import Button, { ButtonIcon } from "../Button";
// import { DrawerProps } from "../Drawer";
import { GoHeart } from "react-icons/go";

type FavoritesDrawerProps = {
    open?: DrawerProps["open"];
};

const FavoritesIcon = (props: FavoritesDrawerProps) => {
    const { open } = props;

    // const noOfItemsInFavorites = useSelector((state: RootState) =>
    //     selectNoOfItemsInFavorites(state)
    // );
    const noOfItemsInFavorites = 3;

    return (
        <>
            <Button
                colorScheme="primary"
                variant={"ghost"}
                onClick={open}
                className="relative flex !shadow-none !border-gray-200 hover:!border-primary ml-auto lg:ml-0 border !w-[3rem] !px-0">
                <ButtonIcon
                    icon={GoHeart}
                    className="text-primary !px-0 text-1.625"
                />

                {noOfItemsInFavorites != 0 && (
                    <NoOfItemsInFavoritesBubble
                        noOfItemsInFavorites={noOfItemsInFavorites}
                    />
                )}
            </Button>
        </>
    );
};

type NoOfItemsInFavoritesBubbleProps = {
    noOfItemsInFavorites: number;
};

const NoOfItemsInFavoritesBubble = (props: NoOfItemsInFavoritesBubbleProps) => {
    const { noOfItemsInFavorites } = props;

    return (
        <span className="font-medium h-1.5 w-1.5 absolute text-white bg-primary right-0 translate-x-1/2 top-2 flex items-center justify-center rounded-full">
            {noOfItemsInFavorites}
        </span>
    );
};

export default FavoritesIcon;
