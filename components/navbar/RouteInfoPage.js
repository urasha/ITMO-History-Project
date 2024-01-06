import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Button,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RouteInfoPage({ route, setIsRouteStarted }) {
    const setData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    const bcgColor = "#ebd4c0";
    const routeInfo = route.attributes;

    return (
        <View style={styles.container}>
            <ScrollView style={{ height: "100%" }}>
                <Text style={styles.header}>Название</Text>
                <Text
                    style={[
                        styles.text,
                        { backgroundColor: "#ebd4c0", borderRadius: 10 },
                    ]}
                >
                    {routeInfo.name}
                </Text>
                <Text style={styles.header}>Описание</Text>
                <ScrollView
                    style={{
                        flexGrow: 0,
                        height: "20%",
                        backgroundColor: "#ebd4c0",
                        borderRadius: 10,
                        marginBottom: 20,
                    }}
                >
                    <Text style={styles.text}>{routeInfo.description}</Text>
                </ScrollView>

                <Image
                    source={{
                        uri: routeInfo.picture.data.attributes.url,
                    }}
                    resizeMode="cover"
                    style={{
                        borderColor: "#000",
                        borderWidth: 1,
                        borderRadius: 50,
                        width: "100%",
                        height: 400,
                    }}
                />

                <View style={{ marginVertical: 20 }}>
                    <Grid>
                        <Col size={33}>
                            <Row
                                style={[
                                    styles.cell,
                                    { borderTopLeftRadius: 20 },
                                ]}
                            >
                                <Text style={styles.cellText}>
                                    Длина маршрута
                                </Text>
                            </Row>
                            <Row
                                style={[
                                    styles.cell,
                                    { backgroundColor: bcgColor },
                                ]}
                            >
                                <Text style={styles.cellText}>
                                    {routeInfo.lenghts}
                                </Text>
                            </Row>
                        </Col>
                        <Col size={33}>
                            <Row style={styles.cell}>
                                <Text style={styles.cellText}>
                                    Время прохождения
                                </Text>
                            </Row>
                            <Row
                                style={[
                                    styles.cell,
                                    { backgroundColor: bcgColor },
                                ]}
                            >
                                <Text style={styles.cellText}>
                                    {routeInfo.Time}
                                </Text>
                            </Row>
                        </Col>
                        <Col size={33}>
                            <Row style={styles.cell}>
                                <Text style={styles.cellText}>
                                    Кол-во остановок
                                </Text>
                            </Row>
                            <Row
                                style={[
                                    styles.cell,
                                    {
                                        borderBottomRightRadius: 20,
                                        backgroundColor: bcgColor,
                                    },
                                ]}
                            >
                                <Text style={styles.cellText}>
                                    {routeInfo.num_of_stops}
                                </Text>
                            </Row>
                        </Col>
                    </Grid>
                </View>

                <View style={{ alignItems: "center" }}>
                    <View style={styles.button}>
                        <Button
                            color="#fff"
                            title="Начать челлендж"
                            onPress={() => {
                                setData("isRouteStarted", true);
                                setIsRouteStarted(true);

                                /* TODO: сделать функцию для начала маршрута */

                                /* переменная route содержит всю инфу о маршруте (и id тоже) */
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: "5%",
        paddingHorizontal: "7%",
    },

    header: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#E8DED4",
        opacity: 0.95,
        marginBottom: 13,
    },
    button: {
        marginTop: 5,
        color: "white",
        height: 60,
        justifyContent: "center",
        width: 200,
        backgroundColor: "#ec5990",
        borderRadius: 4,
    },
    text: {
        overflow: "hidden",
        padding: 12,
        fontSize: 16,
        color: "#333",
        opacity: 0.95,
        marginBottom: 32,
        fontWeight: "500",
    },
    cell: {
        borderWidth: 1,
        borderColor: "#444",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#FA9B7D",
    },
    cellText: {
        color: "#333",
        textAlign: "center",
        fontWeight: "600",
    },
});
