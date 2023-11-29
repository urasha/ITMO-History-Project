import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationPage from './components/registration/RegistrationPage';


export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationPage title="Невская застава"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
