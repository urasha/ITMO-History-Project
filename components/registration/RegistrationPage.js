import { View, StyleSheet, Image, ImageBackground } from "react-native"
import HeaderText from "./HeaderText"
import RegistrationInput from "./RegistrationInput"
import SendButton from "./SendButton"

const backgroundImage = require('../../assets/registrationBackground.png');

function RegistrationPage(props) {
    return (
        <View style={styles.container}>
            <HeaderText>{props.title}</HeaderText>

            <View
              style={{
                height: '0.1%',
                width: '35%',
                borderTopWidth: 5,
                borderColor: '#FFAB49',
                marginBottom: 25,
              }}
            />

            <ImageBackground source={backgroundImage} style={styles.coverImage}>
              <View style={styles.input}>
                <RegistrationInput placeholder="Логин"/>
                <RegistrationInput placeholder="Пароль"/>
              </View>
            </ImageBackground>
            <SendButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E8DED4",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },

    coverImage: {
      width: 300,
      height: 300,
    },

    input: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: '5%',
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  
export default RegistrationPage