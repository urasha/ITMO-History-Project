import { Text, StyleSheet } from "react-native";
function HeaderText(props) {
    return (
        <Text style={styles.headerText}>
            {props.children}
        </Text>
    )
}
const styles = StyleSheet.create({
    headerText: {
      fontWeight: 'bold',
      fontSize: 35,
      color: "#E8DED4",
      marginBottom: 15,
      borderBottomWidth:5,
      borderColor: "#FFAB49",
      padding: 10,
      margin: 30,
      marginBottom: 30
    }
});
export default HeaderText;