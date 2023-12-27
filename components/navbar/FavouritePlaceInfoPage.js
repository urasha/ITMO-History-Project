import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function FavouritePlaceInfoPage({
    favouritePlacesData,
    setFavouritePlacesData,
    setCurrentPage,
    setStackOfPages,
    stackOfPages,
    favouritePlaceInfo
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Название</Text>
            <Text style={styles.text}>{favouritePlaceInfo.name}</Text>
            <Text style={styles.header}>Описание</Text>
            <Text style={styles.text}>{favouritePlaceInfo.description}</Text>
            <Text style={styles.header}>Адрес</Text>
            <Text style={styles.text}>{favouritePlaceInfo.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingVertical: "5%",
        paddingHorizontal: "7%",
    },

    header: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#E8DED4",
        opacity: 0.95,
        marginBottom: 18
    },

    text: {
        backgroundColor: "#ebd4c0",
        borderRadius: 10,
        overflow: "hidden",
        padding: 12,
        fontSize: 16,
        color: "#333",
        opacity: 0.95,
        marginBottom: 12.5,
        fontWeight: "500"
    },
});

