import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RegistrationPage from "./components/registration/Page";
import GreetingPage from "./components/greetingPage/GreetingPage";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <RegistrationPage title="Невская застава" /> */}
			<GreetingPage />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
