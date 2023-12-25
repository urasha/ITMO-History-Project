import { Text, View } from "react-native";

export default function FavouritePlaceInfoPage({
    favouritePlacesData,
    setFavouritePlacesData,
    setCurrentPage,
    setStackOfPages,
    stackOfPages,
    favouritePlaceInfo
}) {
    return (
        <View style={{}}>
            <Text>Адрес: {favouritePlaceInfo.address}</Text>
            <Text>Описание: {favouritePlaceInfo.description}</Text>
            <Text>Название: {favouritePlaceInfo.title}</Text>
        </View>
    )
}
