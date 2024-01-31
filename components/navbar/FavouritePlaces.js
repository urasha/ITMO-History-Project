import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useEffect } from "react";
import axios from "axios";

export default function FavouritePlaces({
    setFavouritePlacesData,
    setCurrentPage,
    setStackOfPages,
    stackOfPages,
    favouritePlacesData,
    setFavouritePlaceInfo,
}) {
    const places = favouritePlacesData;
    const heightOfScrollView = useWindowDimensions().height * 0.65;
    const arrowIcon = `
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289L1.70711 0.292893C1.31658 -0.0976305 0.683417 -0.0976305 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7Z" fill="#E8DED4" fill-opacity="0.3"/>
    </svg>
    `;

    async function getDataFromDb() {
        const id = await getData("id");
        // get favourite places

        // axios
        //     .get("http://89.104.68.107:1337/api/liked-objects?populate=*", {
        //         headers: {
        //             Authorization:
        //                 "Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f",
        //         },
        //     })
        //     .then((response) => {
        //         let places = [];
        //         response.data.data.forEach((el) => {
        //             if (el.attributes.user.data.id == id) {
        //                 places.push(el.attributes.place.data);
        //             }
        //         });
        //         setFavouritePlacesData(places);
        //     })
        //     .catch((error) => {
        //         console.log("ERROR WITH FAVOURITE PLACES!!!");
        //     });

        fetch("http://89.104.68.107:1337/api/liked-objects?populate=*", {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f",
                    "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                let places = [];
                responseData.data.data.forEach((el) => {
                    if (el.attributes.user.data.id == id) {
                        places.push(el.attributes.place.data);
                    }
                });
                setFavouritePlacesData(places);
            })
            .catch((error) => {
                console.log("ERROR WITH FAVOURITE PLACES!!!");
            });
    }
    useEffect(() => {
        getDataFromDb();
    }, []);

    return (
        <View style={[styles.container]}>
            {console.log(places)}
            {places.length === 0 ? (
                <View style={styles.noPlacesContainer}>
                    <Text style={styles.noPlacesText}>
                        🤷 У вас пока нет любимых мест...
                    </Text>
                </View>
            ) : (
                <ScrollView
                    style={{
                        height: places.length * 63,
                        flexGrow: 0,
                        maxHeight: heightOfScrollView,
                    }}
                >
                    {places.map((info, id) => {
                        return (
                            <View
                                key={id}
                                style={styles.favouritePlaceContainer}
                            >
                                <TouchableOpacity
                                    style={{
                                        flexDirection: "row",
                                        flex: 1,
                                        alignItems: "center",
                                    }}
                                    onPress={() => {
                                        setFavouritePlaceInfo(
                                            places[id].attributes
                                        );
                                        stackOfPages.push(
                                            "FavouritePlaceInfoPage"
                                        );
                                        setStackOfPages(stackOfPages);
                                        setCurrentPage(
                                            "FavouritePlaceInfoPage"
                                        );
                                    }}
                                >
                                    <Text style={styles.favouritePlaceText}>
                                        {info.attributes["name"]}
                                    </Text>
                                    <SvgXml
                                        xml={arrowIcon}
                                        style={{
                                            position: "absolute",
                                            left: "90%",
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ScrollView>
            )}

            {/* <TouchableOpacity
                style={styles.addFavouriteContainer}
                onPress={() => {
                    stackOfPages.push("AddFavouritePlaceForm");
                    setStackOfPages(stackOfPages);
                    setCurrentPage("AddFavouritePlaceForm");
                }}
            >
                <Text style={styles.addFavouriteText}>Добавить место</Text>
            </TouchableOpacity> */}
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
        height: 63,
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
        height: "10%",
        justifyContent: "center",
        paddingLeft: "4%",
    },
});
