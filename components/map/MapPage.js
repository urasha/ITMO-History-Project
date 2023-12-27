import { React, useEffect, useState, useRef } from "react";
import { useAssets } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";
import { Animated, View } from "react-native";
import { SafeAreaView, Text } from "react-native";
import WebView from "react-native-webview";
import * as Location from "expo-location";
import SmallCardInfoMap from "./SmallCardInfoMap";
import FullCardInfoMap from "./FullCardInfoMap";

export default function MapPage({ isOpen }) {
    const [isCardOpen, setisCardOpen] = useState(false);
    const [isFullCard, setisFullCard] = useState(false);

    // animation for opening card
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: 0.965,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    //HTML LOAD
    const [MapPageHTML, MapPageHTMLLoadingError] = useAssets(
        require("./MapPage.html")
    );

    const [html, setHTML] = useState("");

    if (MapPageHTML) {
        readAsStringAsync(MapPageHTML[0].localUri).then((data) => {
            setHTML(data);
        });
    }

    //DEBUG
    const debugging = `
    const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
    console = {
        log: (log) => consoleLog('log', log),
        debug: (log) => consoleLog('debug', log),
        info: (log) => consoleLog('info', log),
        warn: (log) => consoleLog('warn', log),
        error: (log) => consoleLog('error', log),
        };
    `;

    // mapFinishedLoading = false;

    const onMessage = (payload) => {
        let dataPayload;
        try {
            dataPayload = JSON.parse(payload.nativeEvent.data);
        } catch (e) {}

        if (dataPayload) {
            if (dataPayload.type === "Console") {
                if (dataPayload.data.log == "map ready") {
                    // mapFinishedLoading = true;
                    // console.log("finished!");
                    fetchRoutes();
                }

                console.info(`[Console] ${JSON.stringify(dataPayload.data)}`);
            } else {
                console.log(dataPayload);
            }
        }
    };

    //LOCATION
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const webviewRef = useRef();

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            } else {
                const locationSubscription = await Location.watchPositionAsync(
                    {
                        accuracy: Location.Accuracy.BestForNavigation,
                        timeInterval: 500,
                        distanceInterval: 0,
                    },
                    (location) => {
                        setLocation(location);
                        //console.log('New location update: ' + location.coords.latitude + ', ' + location.coords.longitude);
                        if (webviewRef.current) {
                            webviewRef.current.postMessage([
                                "location",
                                location.coords.latitude,
                                location.coords.longitude,
                            ]);
                        }
                    }
                );
            }
            return () => locationSubscription.remove();
        })();
    }, []);

    //PICKER
    const pickerData = [
        {
            item: "КронваЛомо",
            id: "1",
        },
        {
            item: "БиржаГрива",
            id: "2",
        },
        {
            item: "item3",
            id: "3",
        },
    ];

    const [selectedRoute, setSelectedRoute] = useState({});

    function onChange() {
        // return (val) => setSelectedRoute(val)
        return (val) => {
            setSelectedRoute(val);

            if (webviewRef.current) {
                webviewRef.current.postMessage(["route", val.id]);
            }
        };
    }

    // with SelectBox
    // return (
    //     <SafeAreaView style={{flex: 1}}>
    //         <SelectBox
    //             label="Выбор тестового маршрута"
    //             options={pickerData}
    //             value={selectedRoute}
    //             onChange={onChange()}
    //             hideInputFilter={true}
    //         />
    //         <WebView
    //             source={{html}}
    //             style={{flex: 1}}
    //             geolocationEnabled={true}
    //             injectedJavaScript={debugging}
    //             onMessage={onMessage}
    //             ref={webviewRef}
    //         />
    //     </SafeAreaView>
    // );


    //FETCH ROUTES
    function fetchRoutes() {
        let chosenRouteId = 1;
        fetch("http://89.104.68.107:1337/api/routes/" + chosenRouteId + "?populate=*", {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f'
            }
        }).then((response) => response.json()).then((responseData) => {
            // console.log("smth");
            var places = [];
            var placesJSON = responseData.data.attributes.places.data;
            for (let i = 0; i < placesJSON.length; i++) {
                var latitude = placesJSON[i].attributes.latitude;
                var longitude = placesJSON[i].attributes.longitude;
                places.push([latitude, longitude]);
            }
            // console.log("PLACES!!!!!!!!!!!!!!!!!!!!!!!!!");
            // console.log(places);

            if (webviewRef.current) {
                webviewRef.current.postMessage(["route", places]);
            }
        });
    }


    // without SelectBox
    return (
        <View
            style={{
                flex: 1,
                opacity: isOpen ? 0.1 : 1,
                backgroundColor: "white",
            }}
            pointerEvents={isOpen ? "none" : "auto"}
        >
            <WebView
                source={{ html }}
                geolocationEnabled={true}
                injectedJavaScript={debugging}
                onMessage={onMessage}
                ref={webviewRef}
            />
            <Text
                style={{ color: "black", fontSize: 24, position: "absolute" }}
                onPress={() => {
                    fadeIn();
                    setisCardOpen(true);
                }}
            >
                OPEN CARD
            </Text>
            {isFullCard ? (
                <FullCardInfoMap setisFullCard={setisFullCard} />
            ) : (
                <SmallCardInfoMap
                    name="some text"
                    cardAnimation={fadeAnimation}
                    isCardOpen={isCardOpen}
                    setisCardOpen={setisCardOpen}
                    setisFullCard={setisFullCard}
                />
            )}
        </View>
    );
}
