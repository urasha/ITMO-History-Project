import { Pressable, StyleSheet, Text } from "react-native"

export default function SendButton() {
  return (
    <Pressable style={styles.button} color="#FFAB49">
      <Text style={styles.text}>Войти</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 52,
    borderRadius: 4,
    elevation: 3,
    borderRadius: 100,
    backgroundColor: '#FFAB49',
    marginTop: '8%',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#2C2C2C',
  },
});