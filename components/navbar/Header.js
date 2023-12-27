import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { SvgXml } from "react-native-svg";

export default function Header({
    text,
    changableIcon,
    stackOfPages,
    setStackOfPages,
    setCurrentPage,
}) {
    const profileIcon = `
    <svg width="34px" height="39px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="4" stroke="white" stroke-width="1.5"/>
    <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    `;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                    if (stackOfPages.length !== 1) {
                        stackOfPages.pop();
                        setCurrentPage(stackOfPages.at(-1));
                        setStackOfPages(stackOfPages);
                    }
                }}
            >
                <SvgXml xml={changableIcon} />
            </TouchableOpacity>

            <Text style={styles.text}>{text}</Text>

            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                    setCurrentPage("Settings");
                    stackOfPages.push("Settings");
                    setStackOfPages(stackOfPages);
                }}
            >
                <SvgXml xml={profileIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        height: "7%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: "#E8DED44D",
    },

    text: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        color: "#E8DED4",
        opacity: 0.95,
    },

    icon: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
    },
});
