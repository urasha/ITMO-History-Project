import { TextInput, StyleSheet } from "react-native"

export default function LoginInput({ placeholder, isSecured, value, setValue, validate }) {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={"#2C2C2C"}
            style={styles.inputStyle}
            secureTextEntry={isSecured}
			value={value}
			onChangeText={(text) => {
				setValue(text);
				validate(text);
			}}
        />
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#FFAB49",
        backgroundColor: "#E8DED4",
        color: "#2C2C2C",
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 15,
        marginBottom: 20,
        width: "70%",
        maxWidth: 300,
    },
});
