import { View, StyleSheet, ImageBackground, Text } from "react-native";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { useState } from "react";
import connection from "../../../src/routes";
const backgroundImage = require("../../../assets/registration/registrationBackground.png");

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [isCorrectEmail, setIsCorrectEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [isCorrectPassword, setIsCorrectPassword] = useState(true);
     connection.getConnection(function (err, connection) {
        connection.query('SELECT * FROM Users WHERE name = ${email} AND password = ${password}', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            res.send(results);
        });
    });
    return (
        <ImageBackground source={backgroundImage} style={styles.coverImage}>
            <View style={styles.input}>
                <EmailInput
                    value={email}
                    setEmail={setEmail}
                    setIsCorrectEmail={setIsCorrectEmail}
                />
                {isCorrectEmail ? null : <Text>email неправильный!!!</Text>}
                <PasswordInput
                    value={password}
                    setPassword={setPassword}
                    setIsCorrectPassword={setIsCorrectPassword}
                />
                {isCorrectPassword ? null : (
                    <Text>
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
});
