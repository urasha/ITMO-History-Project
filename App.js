import Navbar from './components/navbar/Navbar';
import { StatusBar } from 'expo-status-bar';
import MapPage from './components/map/MapPage';
import { View } from 'react-native';
import Main from './components/common/Main';
import FavouritePlaces from './components/navbar/FavouritePlaces';

export default function App() {
  return (
    // <IntroPages />
    // <View style={{flex: 1}}>
    //   <Navbar />

    //   <StatusBar hidden />
    // </View>
    
    <>
      <Main />
    </>
    // <FavouritePlaces />
  );
}
