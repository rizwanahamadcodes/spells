import { BsCart3 } from "react-icons/bs";
import Button, { ButtonIcon } from "./Button";
import { DrawerProps } from "./Drawer/Drawer";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/rootReducer";
// import { selectNoOfItemsInCart } from "../../store/slices/cartSlice";
// import Button, { ButtonIcon } from "../Button";
// import { DrawerProps } from "../Drawer";
import { GoHeart } from "react-icons/go";

type CartDrawerProps = {
    open?: DrawerProps["open"];
};

const CartIcon = (props: CartDrawerProps) => {
    const { open } = props;

    // const noOfItemsInCart = useSelector((state: RootState) =>
    //     selectNoOfItemsInCart(state)
    // );
    const noOfItemsInCart = 3;

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

                {noOfItemsInCart != 0 && (
                    <NoOfItemsInCartBubble noOfItemsInCart={noOfItemsInCart} />
                )}
            </Button>
        </>
    );
};

type NoOfItemsInCartBubbleProps = {
    noOfItemsInCart: number;
};

const NoOfItemsInCartBubble = (props: NoOfItemsInCartBubbleProps) => {
    const { noOfItemsInCart } = props;

    return (
        <span className="font-medium h-1.5 w-1.5 absolute text-white bg-primary right-0 translate-x-1/2 top-2 flex items-center justify-center rounded-full">
            {noOfItemsInCart}
        </span>
    );
};

export default CartIcon;
