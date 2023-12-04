import { StatusBar } from 'expo-status-bar';
import IntroPages from './components/beginner/IntroPages'
import RegistrationPage from './components/beginner/registration/RegistrationPage'

export default function App() {
  return (
    <IntroPages />
  );

//   return (
//     <RegistrationPage title='Регистрация' />
//   );
}

