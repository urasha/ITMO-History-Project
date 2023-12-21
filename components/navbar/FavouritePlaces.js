import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";

export default function FavouritePlaces({
    setCurrentPage,
    setStackOfPages,
    stackOfPages,
    favouritePlacesData,
}) {
    const places = favouritePlacesData;

    const arrowIcon = `
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289L1.70711 0.292893C1.31658 -0.0976305 0.683417 -0.0976305 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7Z" fill="#E8DED4" fill-opacity="0.3"/>
    </svg>
    `;

    return (
        <View style={[styles.container]}>
            {places.length == 0 ? (
                <View style={styles.noPlacesContainer}>
                    <Text style={styles.noPlacesText}>
                        🤷 У вас пока нет любимых мест...
                    </Text>
                </View>
            ) : (
                places.map((info, id) => {
                    return (
                        <View key={id} style={styles.favouritePlaceContainer}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    alignItems: "center",
                                }}
                                onPress={() => {
                                    stackOfPages.push("FavouritePlaceInfoPage");
                                    setStackOfPages(stackOfPages);
                                    setCurrentPage("FavouritePlaceInfoPage");
                                }}
                            >
                                <Text style={styles.favouritePlaceText}>
                                    {info["title"]}
                                </Text>
                                <SvgXml
                                    xml={arrowIcon}
                                    style={{ left: "450%" }}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                })
            )}

            <TouchableOpacity
                style={styles.addFavouriteContainer}
                onPress={() => {
                    stackOfPages.push("AddFavouritePlaceForm");
                    setStackOfPages(stackOfPages);
                    setCurrentPage("AddFavouritePlaceForm");
                }}
            >
                <Text style={styles.addFavouriteText}>Добавить место</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    noPlacesText: {
        color: "#E8DED4",
        fontSize: 18,
    },

    noPlacesContainer: {
        flex: 0.085,
        justifyContent: "center",
        paddingLeft: "3.25%",
        borderBottomWidth: 2,
        borderColor: "#E8DED44D",
    },

    favouritePlaceContainer: {
        flex: 0.085,
        justifyContent: "center",
        paddingLeft: "4.5%",
        borderBottomWidth: 2,
        borderColor: "#E8DED44D",
    },

    favouritePlaceText: {
        color: "#E8DED4",
        fontSize: 18,
    },

    addFavouriteText: {
        color: "#78B9FF",
        fontSize: 18,
    },

    addFavouriteContainer: {
        width: "50%",
        flex: 0.08,
        justifyContent: "center",
        paddingLeft: "4%",
    },

    arrow: {},
});
