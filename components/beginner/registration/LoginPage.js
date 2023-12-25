import { View, StyleSheet } from "react-native";
import HeaderText from "./HeaderText";
import Button from "../../common/RegistrationPageButton";
import LoginForm from "./LoginForm";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginPage({ title, setisLogin, setIsRegistrationOpen }) {
    const setData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

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
                console.log(response.data)
                console.log("Login success!");
                setData("jwt", response.data["jwt"]);
                setisLogin(true);
            })
            .catch((error) => {
                alert("Неверный email или пароль");
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
                setIsRegistrationOpen={setIsRegistrationOpen}
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
