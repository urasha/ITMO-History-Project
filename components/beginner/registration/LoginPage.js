import { View, StyleSheet } from "react-native";
import HeaderText from "./HeaderText";
import Button from "../../common/RegistrationPageButton";
import LoginForm from "./LoginForm";
import { useState } from "react";
import axios from "axios";

export default function LoginPage({ title }) {
    function validate() {
        const _email = email;
        const _password = password;

        const url = "https://hist-museum.onrender.com/api/auth/local";

        axios
            .post(url, {
                identifier: _email,
                password: _password,
            })
            .then((response) => {
                console.log("Login success!");
            })
            .catch((error) => {
                console.log("An error occurred:", error.response);
            });
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <HeaderText>{title}</HeaderText>
            <View style={styles.hr} />
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <Button title="Войти" validate={validate} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8DED4",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    hr: {
        height: "0.1%",
        width: "35%",
        borderTopWidth: 5,
        borderColor: "#FFAB49",
        marginBottom: 25,
    },
});
