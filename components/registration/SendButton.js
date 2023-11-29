import { Pressable, StyleSheet, Text } from "react-native";
function SendButton() {
    return (
        <Pressable style={styles.button} color="#FFAB49">
            <Text style={styles.text}>Отправить</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      borderRadius: 100,
      backgroundColor: '#FFAB49',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
export default SendButton;