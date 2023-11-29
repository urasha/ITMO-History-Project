import { TextInput, StyleSheet } from "react-native";
function RegistrationInput(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={"#fff"}
      style={styles.inputStyle}
    />
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#FFAB49",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 20,
    width: "70%",
    maxWidth: 300,
  },
});
export default RegistrationInput;
