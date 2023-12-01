import { StyleSheet, View, Image } from 'react-native';
import HeaderText from '../../registration/HeaderText';
import AbilitiesList from './List';

export default function AbilitiesPage(props) {
    // TODO: ADD BUTTON TO CONTINUE
    return (
        <View style={styles.container}>
            <HeaderText>{props.title}</HeaderText>
            <View style={styles.hr}/>
            <AbilitiesList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E8DED4",
        width: '100%',
    },

    hr: {
        height: '0.1%',
        width: '30%',
        borderTopWidth: 5,
        borderColor: '#FFAB49',
        marginBottom: 25,
      },
});

