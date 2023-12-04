import { Pressable, StyleSheet, Text, Animated } from "react-native";

export default function RegistrationPageButton({ nextSlide, title }) {
    const animated = new Animated.Value(1);

    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            style={styles.button}
            color="#FFAB49"
            onPress={() => nextSlide ? nextSlide() : null}
            onPressIn={fadeIn}
            onPressOut={fadeOut}
        >
            <Animated.View style={{ opacity: animated }}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 38,
        elevation: 3,
        borderRadius: 100,
        backgroundColor: "#FFAB49",
        marginTop: "8%",
        width: "55%",
        maxWidth: 300,
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
