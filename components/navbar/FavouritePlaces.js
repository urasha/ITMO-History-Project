import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function FavouritePlaces({ setCurrentPage, setStackOfPages, stackOfPages }) {

    let places = [];

    return (
        <View style={[styles.container]}>

            {
            places.length == 0 ? 
            <View style={styles.noPlacesContainer}>
                <Text style={styles.noPlacesText}>🤷 У вас пока нет любимых мест...</Text>
            </View> : 
            <></>
            }

            <TouchableOpacity style={styles.addFavouriteContainer} onPress={() => {
                stackOfPages.push("AddFavouritePlaceForm");
                setStackOfPages(stackOfPages);
                setCurrentPage("AddFavouritePlaceForm");
            }}>
                <Text style={styles.addFavouriteText}>Добавить место</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#2C2C2CE5",
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