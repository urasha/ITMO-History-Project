import { useRef } from "react";
import { Text, TouchableOpacity, View, Animated } from "react-native";
import { SvgXml } from "react-native-svg";

export default function SmallCardInfoMap({
    name,
    cardAnimation,
    isCardOpen,
    setisCardOpen,
    setisFullCard,
}) {
    const arrowDownImage = `<?xml version="1.0" encoding="utf-8"?>
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ee1546"/>
    </svg>`;

    const fadeOut = () => {
        Animated.timing(cardAnimation, {
            toValue: 0,
            duration: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View
            style={{
                width: "100%",
                height: "32%",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius: 2000,
                borderTopRightRadius: 2000,
                borderWidth: 0.168,
                padding: 50,
                backgroundColor: "#FEF8F7",
                alignItems: "center",
                opacity: cardAnimation,
            }}
            pointerEvents={isCardOpen ? "auto" : "none"}
        >
            {/* {console.log(isCardOpen)} */}
            <TouchableOpacity
                onPress={() => {
                    fadeOut();
                    setisCardOpen(false);
                }}
                style={{ padding: 5, marginTop: "-7%", alignItems: "center" }}
            >
                <SvgXml xml={arrowDownImage} />
            </TouchableOpacity>

            <Text
                style={{
                    fontSize: 25,
                    textAlign: "center",
                    marginTop: "2.5%",
                    fontWeight: 700,
                    width: "115%"
                }}
            >
                {name}
            </Text>

            <TouchableOpacity
                style={{ height: "60%" }}
                onPress={() => {
                    setisFullCard(true);
                }}
            >
                <Text
                    style={{
                        fontSize: 19,
                        textAlign: "center",
                        padding: 13,
                        color: "#7CADF8",
                    }}
                >
                    Подробнее
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}
