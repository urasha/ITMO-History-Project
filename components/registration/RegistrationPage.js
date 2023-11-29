import { View, StyleSheet } from "react-native"
import HeaderText from "./HeaderText"
import RegistrationInput from "./RegistrationInput"
import SendButton from "./SendButton"
function RegistrationPage(props) {
    return (
        <View style={styles.container}>
            <HeaderText>{props.title}</HeaderText>
            <RegistrationInput placeholder="Логин"/>
            <RegistrationInput placeholder="Пароль"/>
            <SendButton/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2C2C2C",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  });
export default RegistrationPage