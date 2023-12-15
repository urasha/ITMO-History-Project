import { useState } from "react";
import { View } from "react-native";
import Menu from "./Menu";
import BurgerButton from "./BurgerButton";

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);

    return (
        <>
        <View style={{flex: 1}}>
            <BurgerButton isOpen={isOpen} setisOpen={setisOpen} />
        </View>
        <Menu isOpen={isOpen} setisOpen={setisOpen} />
        </>
        
    )
}