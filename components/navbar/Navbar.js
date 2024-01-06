import { View } from "react-native";
import Menu from "./Menu";
import BurgerButton from "./BurgerButton";

export default function Navbar({
    isOpen,
    setisOpen,
    setisLogin,
    setIsRouteStarted,
}) {
    return (
        <>
            <View style={{ flex: isOpen ? 0 : 0.2 }}>
                <BurgerButton isOpen={isOpen} setisOpen={setisOpen} />
            </View>
            <Menu
                isOpen={isOpen}
                setisOpen={setisOpen}
                setisLogin={setisLogin}
                setIsRouteStarted={setIsRouteStarted}
            />
        </>
    );
}
