import 'react-native-gesture-handler'

import { StyleSheet, View, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Carousel from 'react-native-reanimated-carousel'
import LoginPage from './registration/LoginPage'
import AbilitiesPage from '../beginner/abilities/AbilitiesPage'
import GreetingPage from '../beginner/greetingPage/GreetingPage'

const window = Dimensions.get('window');
const pages = [<GreetingPage />, <AbilitiesPage title='Возможность' />, <LoginPage title='Невская застава' />]

export default function IntroPages() {
  return (
    <View style={styles.container}>
      <Carousel
        loop={false}
        width={window.width}
        height={window.height}
        autoPlay={false}
        data={[...new Array(3).keys()]}
        scrollAnimationDuration={500}
        renderItem={({ index }) => (
          pages[index]
        )}
      />
      <StatusBar style='auto' />
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