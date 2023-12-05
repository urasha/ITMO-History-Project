import { View, StyleSheet, ImageBackground, Text } from "react-native";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { useState } from "react";

const backgroundImage = require("../../../assets/registration/registrationBackground.png");

export default function LoginForm({ email, password, setEmail, setPassword }) {

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
                {isCorrectEmail ? null : <Text style={styles.text}>Email некорретный</Text>}
                <PasswordInput
                    value={password}
                    setPassword={setPassword}
                    setIsCorrectPassword={setIsCorrectPassword}
                />
                {isCorrectPassword ? null : (
                    <Text style={styles.text}>
                        Пароль должен состоять из латинских букв, быть не менее 12 символов, содержать как
                        минимум одну цифру, одну заглавную букву, одну строчную букву!
                    </Text>
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
        fontWeight: "700",
        marginTop: -17,
        marginBottom: 5,
        textAlign: 'center',
        color: '#bf483f',
    }
});
