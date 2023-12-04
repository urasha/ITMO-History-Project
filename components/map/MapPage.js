import { React, useEffect, useState, useRef } from "react";
import { useAssets } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";
import SelectBox from 'react-native-multi-selectbox';
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";
import * as Location from 'expo-location';

export default function MapPage() {
    
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
        let dataPayload;
        try {
            dataPayload = JSON.parse(payload.nativeEvent.data);
        } catch (e) {}

        if (dataPayload) {
            if (dataPayload.type === 'Console') {
            console.info(`[Console] ${JSON.stringify(dataPayload.data)}`);
            } else {
            console.log(dataPayload)
            }
        }
    };


    //LOCATION
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const webviewRef = useRef();

    useEffect(() => {( async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          console.log('Permission to access location was denied')
        } else {
          const locationSubscription = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 500,
                distanceInterval: 0
          }, (location) => {
            setLocation(location);
            //console.log('New location update: ' + location.coords.latitude + ', ' + location.coords.longitude);
            if (webviewRef.current) {
                webviewRef.current.postMessage(["location", location.coords.latitude, location.coords.longitude]);
            }
          })
        } return () => locationSubscription.remove()
      })()}, []);

    

    //PICKER
    const pickerData = [
        {
            item: 'КронваЛомо',
            id: '1',
        },
        {
            item: 'БиржаГрива',
            id: '2',
        },
        {
            item: 'item3',
            id: '3',
        },
    ];

    const [selectedRoute, setSelectedRoute] = useState({})

    function onChange() {
        // return (val) => setSelectedRoute(val)
        return (val) => {
            setSelectedRoute(val);
            
            if (webviewRef.current) {
                webviewRef.current.postMessage(['route', val.id]);
            }
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <SelectBox
                label="SelectBox"
                options={pickerData}
                value={selectedRoute}
                onChange={onChange()}
                hideInputFilter={true}
            />
            <WebView
                source={{html}}
                style={{flex: 1}}
                geolocationEnabled={true}
                injectedJavaScript={debugging}
                onMessage={onMessage}
                ref={webviewRef}
            />
        </SafeAreaView>
    );
}