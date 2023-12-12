import { StatusBar } from 'expo-status-bar';
import RegistrationPage from './components/beginner/registration/RegistrationPage'
import IntroPages from './components/beginner/IntroPages';
import MapPage from './components/map/MapPage';

export default function App() {
  return (
    <MapPage />
  );

//   return (
//     <RegistrationPage title='Регистрация' />
//   );
}
