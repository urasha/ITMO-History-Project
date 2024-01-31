import { View, StyleSheet } from "react-native";
import HeaderText from "./HeaderText";
import RegistrationForm from "./RegistrationForm";
import RegistrationPageButton from "../../common/RegistrationPageButton";
import { useState } from "react";
import axios from "axios";

export default function RegistrationPage({
    title,
    isRegistrationOpen,
    setIsRegistrationOpen,
}) {
    function register() {
        const _email = email;
        const _password = password;

        const email_regular = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const password_regular = /^.{6,}$/;

        // check is correct password & email
        if (
            password_regular.test(_password) == false ||
            email_regular.test(_email) == false
        ) {
            alert("Email или пароль некорректны!");
            return;
        }

        const url = "http://89.104.68.107:1337/api/auth/local/register";

        // axios
        //     .post(url, {
        //         username: _email.split("@")[0],
        //         email: _email,
        //         password: _password,
        //     })
        //     .then((response) => {
        //         console.log("Register success!");
        //         setIsRegistrationOpen(false);
        //     })
        //     .catch((error) => {
        //         console.log("An error occurred:", error.response);
        //     });

        fetch(url, {
            method: "POST",
            headers: {
                Authorization:
                    "Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    username: _email.split("@")[0],
                    email: _email,
                    password: _password,
                },
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("Register success!");
                setIsRegistrationOpen(false);
            })
            .catch((error) => {
                console.log("An error occurred:", error.response);
            });
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View
            style={[styles.container, { top: isRegistrationOpen ? 0 : "100%" }]}
        >
            <HeaderText>{title}</HeaderText>
            <View style={styles.hr} />
            <RegistrationForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <RegistrationPageButton
                title="Создать аккаунт"
                validate={register}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        backgroundColor: "#E8DED4",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },

    hr: {
        height: "0.1%",
        width: "35%",
        borderTopWidth: 5,
        borderColor: "#FFAB49",
        marginBottom: 25,
    },
});
