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
      color: "#2C2C2C",
      marginBottom: 15,
    }
});

export default HeaderText;