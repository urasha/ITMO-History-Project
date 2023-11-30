import { View, StyleSheet } from 'react-native';
import ListComponent from './ListComponent';

const heartImage = require('../../../assets/beginner/heart.png')
const heartText = 'Отметь свои “любимые места” на карте'

const rootImage = require('../../../assets/beginner/root.png')
const rootText = 'Посмотри по карте, каким путем ты сегодня шёл'

const roundImage = require('../../../assets/beginner/roundArrows.png')
const roundText = 'Найди свой любимый исторический маршрут'

export default function AbilitiesList() {
  return (
    <View style={styles.container}>
        <ListComponent text={heartText} image={heartImage}/>
        <ListComponent text={rootText} image={rootImage}/>
        <ListComponent text={roundText} image={roundImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.55,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '75%',
    },
});