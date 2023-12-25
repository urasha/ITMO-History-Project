import { View, StyleSheet, ImageBackground, Text } from "react-native";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { useState } from "react";

export default function LoginForm({ email, password, setEmail, setPassword, setIsRegistrationOpen }) {
    const [isCorrectEmail, setIsCorrectEmail] = useState(true);
    const [isCorrectPassword, setIsCorrectPassword] = useState(true);

    const backgroundImage = require("../../../assets/registration/registrationBackground.png");

    return (
        <ImageBackground source={backgroundImage} style={styles.coverImage}>
            <View style={styles.input}>
                <EmailInput value={email} setEmail={setEmail} setIsCorrectEmail={setIsCorrectEmail} />
                <PasswordInput value={password} setPassword={setPassword} setIsCorrectPassword={setIsCorrectPassword} />
                <Text style={{padding: 5, color: "#2c63c9", fontWeight: "bold"}} onPress={() => setIsRegistrationOpen(true)}>Нет аккаунта? Создать аккаунт</Text>
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
        fontWeight: "700",
        marginTop: -17,
        marginBottom: 5,
        textAlign: "center",
        color: "#bf483f",
    },
});
