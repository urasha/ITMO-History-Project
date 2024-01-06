import { Button, StyleSheet, View, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EndRouteButton({ setIsRouteStarted }) {
    const setData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.button}>
            <Button
                color="#fff"
                title="Закончить"
                onPress={() => {
                    setData("isRouteStarted", false);
                    setIsRouteStarted(false);

                    /* TODO: сделать функцию для удаления всех точек */
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        left: Dimensions.get("screen").width / 2 - 70,
        bottom: 40,
        color: "white",
        height: 50,
        justifyContent: "center",
        width: 140,
        backgroundColor: "#ee2550",
        borderRadius: 100,
    },
});
