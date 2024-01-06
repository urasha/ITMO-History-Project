import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import { SvgXml } from "react-native-svg";

export default function Routes({
    setRouteInfo,
    routes,
    setCurrentPage,
    setStackOfPages,
    stackOfPages,
}) {
    const heightOfScrollView = useWindowDimensions().height * 0.65;
    const arrowIcon = `
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289L1.70711 0.292893C1.31658 -0.0976305 0.683417 -0.0976305 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976315 12.6834 -0.0976315 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7Z" fill="#E8DED4" fill-opacity="0.3"/>
    </svg>
    `;

    return (
        <View style={[styles.container]}>
            <ScrollView
                style={{
                    height: routes.length * 63,
                    flexGrow: 0,
                    maxHeight: heightOfScrollView,
                }}
            >
                {routes.map((info, id) => {
                    return (
                        <View key={id} style={styles.favouritePlaceContainer}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    alignItems: "center",
                                }}
                                onPress={() => {
                                    setRouteInfo(
                                        routes[id].attributes
                                    );
                                    stackOfPages.push("RouteInfoPage");
                                    setStackOfPages(stackOfPages);
                                    setCurrentPage("RouteInfoPage");
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
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
        fontSize: 17,
        width: "85%",
    },

    addFavouriteContainer: {
        width: "50%",
        height: '10%',
        justifyContent: "center",
        paddingLeft: "4%",
    },
});