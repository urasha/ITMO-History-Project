import { Image, Text, View, StyleSheet } from 'react-native';

export default function ListComponent(props) {
  return (
    <View style={styles.container}>
        <Image source={props.image}/>
        <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#2C2C2C',
        fontFamily: 'Symbol',
        fontSize: 20,
        width: '70%',
        marginLeft: '5%',
    },
});