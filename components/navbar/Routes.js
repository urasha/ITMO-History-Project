import { View, StyleSheet, Text } from "react-native";
import { SvgXml } from "react-native-svg";

export default function Routes({
    routes,
    setCurrentPage,
    setStackOfPages,
    stackOfPages,
}) {
    return (
        <View style={[styles.container]}>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});
