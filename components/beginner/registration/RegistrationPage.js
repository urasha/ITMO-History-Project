import { View, StyleSheet } from "react-native";
import HeaderText from "./HeaderText";
import RegistrationForm from "./RegistrationForm";
import RegistrationPageButton from "../../common/RegistrationPageButton";
import { useState } from "react";
import axios from "axios";

export default function RegistrationPage({ title, isRegistrationOpen, setIsRegistrationOpen }) {
    function register() {
        const _email = email;
        const _password = password;

        const email_regular = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const password_regular = /^.{6,}$/;

        // check is correct password & email
        if (password_regular.test(_password) == false || email_regular.test(_email) == false) {
            alert("Email или пароль некорректны!")
            return;
        }

        const url = "https://hist-museum.onrender.com/api/auth/local/register";

        axios
            .post(url, {
                username: _email.split('@')[0],
                email: _email,
                password: _password,
            })
            .then((response) => {
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
        <View style={[styles.container, {top: isRegistrationOpen ? 0 : "100%"}]}>
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
        height: "100%"
    },

    hr: {
        height: "0.1%",
        width: "35%",
        borderTopWidth: 5,
        borderColor: "#FFAB49",
        marginBottom: 25,
    },
});
