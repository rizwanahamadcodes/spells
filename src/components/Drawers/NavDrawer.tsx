import { useToggle } from "../../hooks/useToggle";
import Drawer, { DrawerBody, DrawerDefaultHead } from "../Drawer/Drawer";
import Hamburger from "../Hamburger/Hamburger";
import NavMenuWithTabIndicator from "../Navbar/NavMenuWithTabIndicator";

type NavDrawerProps = {
    viewportTouchingStatus?: {
        topTouchedTop: boolean;
        bottomTouchedTop: boolean;
    };
};

const NavDrawer = (props: NavDrawerProps) => {
    const { viewportTouchingStatus } = props;

    const { isOpen, open, close } = useToggle(false);

    return (
        <span className="lg:hidden">
            <Hamburger className="lg:hidden" onClick={open} />
            <Drawer isOpen={isOpen} close={close} open={open}>
                <DrawerDefaultHead
                    height={
                        viewportTouchingStatus?.topTouchedTop
                            ? "h-navHeight-large"
                            : "h-navHeight-small"
                    }
                />
                <DrawerBody>
                    <NavMenuWithTabIndicator
                        onNavItemClick={close}
                        direction="vertical"
                    />
                </DrawerBody>
            </Drawer>
        </span>
    );
};

export default NavDrawer;
