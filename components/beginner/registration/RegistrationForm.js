import { View, StyleSheet, ImageBackground } from "react-native";
import LoginInput from "./LoginInput";

const backgroundImage = require('../../../assets/registration/registrationBackground.png');

export default function RegistrationForm() {
  return (
    <ImageBackground source={backgroundImage} style={styles.coverImage}>
      <View style={styles.input}>
        <LoginInput placeholder="Логин" />
        <LoginInput placeholder="Пароль" isSecured={true} />
        <LoginInput placeholder="Подтверждение пароля" isSecured={true} />
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
