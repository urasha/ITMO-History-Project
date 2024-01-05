import { React, useEffect, useState, useRef } from "react";
import { useAssets } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";
import { Animated, View } from "react-native";
import { SafeAreaView, Text } from "react-native";
import WebView from "react-native-webview";
import * as Location from "expo-location";
import SmallCardInfoMap from "./SmallCardInfoMap";
import FullCardInfoMap from "./FullCardInfoMap";
import { load } from '@2gis/mapgl';


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

    const onMessage = (payload) => {
        // console.log(payload.nativeEvent.data);

        try {
            if (payload.nativeEvent.data == "map ready") {
                let chosenRouteId = 1;
                fetchRoutes(chosenRouteId);
            }
            else if (payload.nativeEvent.data.split(',')[0] == 'clicked') {
                data = payload.nativeEvent.data.split(',');
                coords = [data[1], data[2]];
                
                places = [];
                for (var i = 3; i < data.length; i+=3) {
                    places.push([data[i], data[i+1], data[i+2]]);
                }
                id = findSim(places, coords);

                fetchPointInfo(id);
                fadeIn();
                setisCardOpen(true);
            }
        } catch (e) { console.error (e); }
    };

    // //LOCATION
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
                        if (setLocation) {
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
                    }
                );
            }
            return () => locationSubscription.remove();
        })();
    }, []);


    //FETCH ROUTES
    function fetchRoutes(chosenRouteId) {
        fetch("http://89.104.68.107:1337/api/routes/" + chosenRouteId + "?populate=*", {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f'
            }
        }).then((response) => response.json()).then((responseData) => {
            var places = [];
            var placesJSON = responseData.data.attributes.places.data;
            for (let i = 0; i < placesJSON.length; i++) {
                var latitude = placesJSON[i].attributes.latitude;
                var longitude = placesJSON[i].attributes.longitude;
                var id = placesJSON[i].id;
                places.push([longitude, latitude, id]);
            }

            if (webviewRef.current) {
                webviewRef.current.postMessage(["route", places]);
            }
        });
    }


    //FETCH POINT INFO
    function findSim(places, coord) {
        minE = 10000;
        placeInd = -1;
        for (var i = 0; i < places.length; i++) {
            var latE = Math.abs(places[i][0] - coord[0]);
            var longE = Math.abs(places[i][1] - coord[1]);
            if (latE < 0.0005 && longE < 0.0005) {
                if (latE + longE < minE) {
                    minE = latE + longE;
                    placeInd = i;
                }
            }
        }
        return places[placeInd][2];
    }

    function fetchPointInfo(id) {
        fetch("http://89.104.68.107:1337/api/places?filters[id][$eq]=" + id, {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f'
            }
        }).then((response) => response.json()).then((responseData) => {
            data = responseData.data[0].attributes;
            console.log(data);
            ////////////////////////////////////////////////////////////////////////POINT INFO DATA
        });
    }

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
                OPEN CARD {/* для тестов */}
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
