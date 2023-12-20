import { View, StyleSheet, Text, Pressable, Animated } from "react-native";
import { SvgXml } from "react-native-svg";

export default function MenuListComponent({ image, text, textVars, setCurrentPage, setStackOfPages, stackOfPages }) {
    const arrowIcon = `
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289L1.70711 0.292893C1.31658 -0.0976305 0.683417 -0.0976305 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7Z" fill="#E8DED4" fill-opacity="0.3"/>
    </svg>
    `;

    // text opacity animation on press
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
            style={styles.container}
            onPress={() => {
                console.log(text)
                if (text === textVars["FavouritePlaces"]) {
                    setCurrentPage("FavouritePlaces")
                    stackOfPages.push("FavouritePlaces")
                    setStackOfPages(stackOfPages)
                }
            }}
            onPressIn={fadeIn}
            onPressOut={fadeOut}
        >
            <SvgXml xml={image} />
            <View style={styles.textContainer}>
                <Animated.View style={{ opacity: animated }}>
                    <Text style={styles.text}>{text}</Text>
                </Animated.View>
            </View>
            <SvgXml xml={arrowIcon} style={styles.arrow} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        left: 20,
    },

    text: {
        borderBottomWidth: 2,
        borderColor: "#E8DED44D",
        color: "#E8DED4",
        fontSize: 20,
    },

    textContainer: {
        justifyContent: "center",
        left: 15,
        borderBottomWidth: 2,
        borderColor: "#E8DED44D",
        width: "80%",
        height: 60,
    },

    arrow: {
        right: "35%",
    },
});
