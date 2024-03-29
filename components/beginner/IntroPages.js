import "react-native-gesture-handler";

import { StyleSheet, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import Carousel from "react-native-reanimated-carousel";
import LoginPage from "./registration/LoginPage";
import AbilitiesPage from "../beginner/abilities/AbilitiesPage";
import GreetingPage from "../beginner/greetingPage/GreetingPage";
import { useEffect, useRef, useState } from "react";
import RegistrationPage from "./registration/RegistrationPage";

const window = Dimensions.get("window");

export default function IntroPages({ setisLogin }) {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    
    const carouselRef = useRef(null);

    function nextSlide() {
        carouselRef.current.next();
    }

    const pages = [
        <GreetingPage nextSlide={nextSlide} />,
        <AbilitiesPage nextSlide={nextSlide} title="Возможность" />,
        <LoginPage title="Невская застава" setisLogin={setisLogin} setIsRegistrationOpen={setIsRegistrationOpen} />,
        // <RegistrationPage title="Регистрация" />
    ];

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                loop={false}
                width={window.width}
                height={window.height}
                autoPlay={false}
                data={[...new Array(pages.length).keys()]}
                scrollAnimationDuration={500}
                renderItem={({ index }) => pages[index]}
            />
            <RegistrationPage isRegistrationOpen={isRegistrationOpen} setIsRegistrationOpen={setIsRegistrationOpen} title="Регистрация"></RegistrationPage>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
