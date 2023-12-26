import { View, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BurgerButton({ isOpen, setisOpen }) {
    
    return (
        <Pressable
            onPress={() => setisOpen(true)}
            style={[styles.button, { opacity: isOpen ? 0 : 0.9 }]}
        >
            <View style={[styles.hr, { width: "12%" }]} />
            <View style={[styles.hr, { width: "9%" }]} />
            <View style={[styles.hr, { width: "12%" }]} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8DED4",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },

    hr: {
        borderRadius: 100,
        borderTopWidth: 4,
        borderColor: "#fff",
        marginTop: 10,
    },

    hrContainer: {
        position: "absolute",
        top: "7%",
        flex: 1,
        alignItems: "flex-end",
        width: "100%",
        paddingRight: 20,
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2C2C2C",
        opacity: 0.9,
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        maxHeight: 200,
    },
});
