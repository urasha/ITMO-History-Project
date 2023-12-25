import { View, StyleSheet, ImageBackground, Text } from "react-native";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { useState } from "react";

const backgroundImage = require("../../../assets/registration/registrationBackground.png");

export default function RegistrationForm({
    email,
    setEmail,
    password,
    setPassword,
}) {
    const [isCorrectEmail, setIsCorrectEmail] = useState(true);
    const [isCorrectPassword, setIsCorrectPassword] = useState(true);

    return (
        <ImageBackground source={backgroundImage} style={styles.coverImage}>
            <View style={styles.input}>
                <EmailInput
                    value={email}
                    setEmail={setEmail}
                    setIsCorrectEmail={setIsCorrectEmail}
                />
                {isCorrectEmail == false ? (
                    <Text style={styles.text}>Email некоретный!</Text>
                ) : (
                    <></>
                )}
                <PasswordInput
                    value={password}
                    setPassword={setPassword}
                    setIsCorrectPassword={setIsCorrectPassword}
                />
                {isCorrectPassword == false ? (
                    <Text style={styles.text}>
                        Пароль должен состоять минимум из 6 символов
                    </Text>
                ) : (
                    <></>
                )}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    coverImage: {
        width: 300,
        height: 300,
    },

    input: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: "5%",
        left: 0,
        right: 0,
        bottom: 0,
    },

    text: {
        width: "70%",
        fontWeight: "700",
        marginTop: -14,
        marginBottom: 20,
        textAlign: "center",
        color: "#bf483f",
    },
});
