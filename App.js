import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import RegistrationPage from './components/registration/RegistrationPage'
import AbilitiesPage from './components/beginner/abilities/AbilitiesPage';
import GreetingPage  from './components/greetingPage/GreetingPage';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <RegistrationPage title="Невская застава"/>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // return (
  //   <View style={styles.container}>
  //     <AbilitiesPage title='Особенности'/>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <GreetingPage />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
