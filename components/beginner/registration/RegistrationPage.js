import { View, StyleSheet } from "react-native";
import HeaderText from "./HeaderText";
import Button from "../../common/RegistrationPageButton";
import RegistrationForm from "./RegistrationForm";
import RegistrationPageButton from "../../common/RegistrationPageButton";

export default function RegistrationPage(props) {
    return (
        <View style={styles.container}>
            <HeaderText>{props.title}</HeaderText>
            <View style={styles.hr} />
            <RegistrationForm />
            <Button title="Войти" onPress={}/>
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
