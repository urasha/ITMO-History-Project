import { Pressable, StyleSheet, Text } from "react-native";

export default function RegistrationPageButton(props) {
    return (
        <Pressable style={styles.button} color="#FFAB49">
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 38,
        borderRadius: 4,
        elevation: 3,
        borderRadius: 100,
        backgroundColor: "#FFAB49",
        marginTop: "8%",
        width: "55%",
        maxWidth: 300
    },

    text: {
        fontSize: 18,
        lineHeight: 21,
        textAlign: "center",
        fontWeight: "500",
        letterSpacing: 0.25,
        color: "#2C2C2C",
    },
});
