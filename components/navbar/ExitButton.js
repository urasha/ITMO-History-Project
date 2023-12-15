import { View, Pressable, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

export default function ExitButton({ setisOpen }) {
    const exitButtonImage = `
    <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E8DED4" stroke-opacity="0.3"/>
    <rect width="29.5699" height="2.95699" rx="1.47849" transform="matrix(-0.707106 -0.707107 -0.707106 0.707107 31.4999 29.4091)" fill="#E8DED4"/>
    <rect width="29.5699" height="2.95699" rx="1.47849" transform="matrix(0.707106 -0.707107 0.707106 0.707107 8.50006 29.4091)" fill="#E8DED4"/>
    </svg>
    `

    return (
        <View style={styles.imageContainer}>
            <Pressable onPress={() => setisOpen(false)}>
                <SvgXml xml={exitButtonImage} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        position: "absolute",
        top: "85%",
    }
});