import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import RegistrationPageButton from "../../common/RegistrationPageButton";

const logo = require("../../../assets/beginner/logo.png")

export default function GreetingPage() {
	return (
		<View style={styles.container}>
			<View style={styles.hrContainer}>
				<View style={[styles.hr, { width: "22%" }]} />
				<View style={[styles.hr, { width: "16%" }]} />
				<View style={[styles.hr, { width: "10%" }]} />
			</View>
			<Image style={styles.image} source={logo} />
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
		padding: 5,
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
	},

	hr: {
		height: "0.1%",
		width: "35%",
		borderRadius: 100,
		borderTopWidth: 7,
		borderColor: "#FFAB49",
		marginBottom: 12.5,
	},


	hrContainer: {
		position: "absolute",
		top: "7%",
		flex: 1,
		alignItems: "flex-end",
		width: "100%",
		paddingRight: 20
	}
});
