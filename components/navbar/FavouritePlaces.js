import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "./Header";
import ExitButton from "./ExitButton";

export default function FavouritePlaces({  }) {
    const backArrowIcon = `
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 7.78416 0.118526 8.05668 0.329505 8.25761L7.0795 14.6862C7.51884 15.1046 8.23116 15.1046 8.6705 14.6862C9.10983 14.2678 9.10983 13.5894 8.6705 13.171L2.71599 7.5L8.6705 1.82904C9.10983 1.41062 9.10983 0.732233 8.6705 0.313814C8.23116 -0.104605 7.51884 -0.104605 7.0795 0.313814L0.329505 6.74238C0.118526 6.94332 0 7.21584 0 7.5Z" fill="#E8DED4" fill-opacity="0.3"/>
    </svg>

    `

    let places = [];

    return (
        <View style={[styles.container, { top: 0 }]}>
            <Header text="Любимые места" changableIcon={backArrowIcon} />

            {
            places.length == 0 ? 
            <View style={styles.noPlacesContainer}>
                <Text style={styles.noPlacesText}>🤷 У вас пока нет любимых мест...</Text>
            </View> : 
            <></>
            }

            <TouchableOpacity style={styles.addFavouriteContainer}>
                <Text style={styles.addFavouriteText}>Добавить место</Text>
            </TouchableOpacity>
            <ExitButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#2C2C2CE5",
        position: "absolute",
    },

    noPlacesText: {
        color: "#E8DED4",
        fontSize: 18,
    },

    noPlacesContainer: {
        flex: 0.085,
        justifyContent: 'center',
        paddingLeft: '3.25%',
        borderBottomWidth: 2,
        borderColor: "#E8DED44D",
    },

    addFavouriteText: {
        color: '#78B9FF',
        fontSize: 18
    },

    addFavouriteContainer: {
        width: '50%',
        flex: 0.08,
        justifyContent: 'center',
        paddingLeft: '4%'
    }
});