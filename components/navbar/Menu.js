import { View, StyleSheet } from "react-native";
import Header from "./Header";
import ExitButton from "./ExitButton";
import MenuList from "./MenuList";

export default function Menu({ isOpen, setisOpen }) {
    return (
        <View style={[styles.container, { top: isOpen ? 0 : "-100%" }]}>
            <Header text="Мария"/>
            <MenuList />
            <ExitButton setisOpen={setisOpen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#2C2C2C",
        opacity: 0.85,
        position: "absolute",
    },
});