import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export default function RouteInfoPage({ routeInfo }) {
    const bcgColor = "#ebd4c0";

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Название</Text>
                <Text style={styles.text}>{routeInfo.name}</Text>
                <Text style={styles.header}>Описание</Text>
                <ScrollView style={{ flexGrow: 0, height: "20%" }}>
                    <Text style={styles.text}>{routeInfo.description}</Text>
                </ScrollView>

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
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 0.8,
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

    text: {
        backgroundColor: "#ebd4c0",
        borderRadius: 10,
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
        borderColor: "#000",
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
