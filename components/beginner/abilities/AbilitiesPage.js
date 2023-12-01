import { StyleSheet, View } from 'react-native';
import RegistrationPageButton from '../../common/RegistrationPageButton';
import HeaderText from '../../beginner/registration/HeaderText';
import AbilitiesList from './AbilitiesList';

export default function AbilitiesPage(props) {
    return (
        <View style={styles.container}>
            <HeaderText>{props.title}</HeaderText>
            <View style={styles.hr} />
            <AbilitiesList />
            <RegistrationPageButton title='Начать регистрацию' />
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

