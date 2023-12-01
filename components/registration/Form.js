import { View, StyleSheet, ImageBackground } from "react-native";
import RegistrationInput from "./Input";

const backgroundImage = require('../../assets/registration/registrationBackground.png');

export default function RegistrationForm() {
  return (
    <ImageBackground source={backgroundImage} style={styles.coverImage}>
      <View style={styles.input}>
        <RegistrationInput placeholder="Логин" />
        <RegistrationInput placeholder="Пароль" />
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '5%',
    left: 0,
    right: 0,
    bottom: 0,
  }
});
