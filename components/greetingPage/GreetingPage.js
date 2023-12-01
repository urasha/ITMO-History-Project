import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import RegistrationPageButton from "../common/RegistrationPageButton";

export default function GreetingPage() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/logo.png")} />
			<Text style={styles.text}>Мы поможем тебе погрузиться в историю самым интересным и полезным способом!</Text>
			<View style={styles.buttonContainer}>
            	<RegistrationPageButton title="Подробнее" />
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8DED4",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
		height: "100%"
    },

	image: {
		resizeMode: "contain",
		width: "80%",
		height: "20%",
		marginTop: "-20%"
	},

	text: {
		fontSize: 19,
		padding: 10,
		marginTop: 30,
		width: "75%",
		textAlign: "center",
		lineHeight: 23,
		fontWeight: "500"
	},

	buttonContainer: {
		position: "absolute",
		width: "100%",
		bottom: "15%",
		flex: 1,
		alignItems: "center",
        justifyContent: "center",
	}
});
