import { View, StyleSheet } from "react-native";
import HeaderText from "./HeaderText";
import Button from "../../common/RegistrationPageButton";
import LoginForm from "./LoginForm";

export default function LoginPage({ title }) {
    return (
        <View style={styles.container}>
            <HeaderText>{title}</HeaderText>
            <View style={styles.hr} />
            <LoginForm />
            <Button title="Войти" />
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
