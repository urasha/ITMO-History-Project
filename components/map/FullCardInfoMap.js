import { useEffect, useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Animated,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { Audio } from "expo-av";

export default function FullCardInfoMap({ setisFullCard, placeData }) {
    const arrowDownImage = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ee1546"/>
    </svg>
    `;

    const addressImage = `
    <?xml version="1.0" ?>
    <svg width="30px" height="30px" viewBox="0 0 8.4666669 8.4666669" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg">
    <defs id="defs2"/>
    <g id="layer1" transform="translate(0,-288.53332)">
    <path d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z" id="path929" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"/>
    </g>
    </svg>
    `;

    const descriptionImage = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,7H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM3,20V9H21V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Zm3-6H18V12H6Zm0,4h6V16H6Z"/></svg>
    `;

    const audioImage = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg width="33px" height="33px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.41667 14L8.5 9L10.5833 14M6.41667 14L6 15M6.41667 14H10.5833M10.5833 14L11 15M13.5 9.5V14.5C13.5 14.7761 13.7239 15 14 15H15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9H14C13.7239 9 13.5 9.22386 13.5 9.5ZM5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    const playImage = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"/>
    <path d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z" stroke="#1C274C" stroke-width="1.5"/>
    </svg>
    `;

    const stopImage = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.948 7.25H12.052C12.9505 7.24997 13.6997 7.24995 14.2945 7.32991C14.9223 7.41432 15.4891 7.59999 15.9445 8.05546C16.4 8.51093 16.5857 9.07773 16.6701 9.70552C16.7501 10.3003 16.75 11.0495 16.75 11.948V12.052C16.75 12.9505 16.7501 13.6997 16.6701 14.2945C16.5857 14.9223 16.4 15.4891 15.9445 15.9445C15.4891 16.4 14.9223 16.5857 14.2945 16.6701C13.6997 16.7501 12.9505 16.75 12.052 16.75H11.948C11.0495 16.75 10.3003 16.7501 9.70552 16.6701C9.07773 16.5857 8.51093 16.4 8.05546 15.9445C7.59999 15.4891 7.41432 14.9223 7.32991 14.2945C7.24995 13.6997 7.24997 12.9505 7.25 12.052V11.948C7.24997 11.0495 7.24995 10.3003 7.32991 9.70552C7.41432 9.07773 7.59999 8.51093 8.05546 8.05546C8.51093 7.59999 9.07773 7.41432 9.70552 7.32991C10.3003 7.24995 11.0495 7.24997 11.948 7.25ZM9.90539 8.81654C9.44393 8.87858 9.24643 8.9858 9.11612 9.11612C8.9858 9.24643 8.87858 9.44393 8.81654 9.90539C8.75159 10.3884 8.75 11.036 8.75 12C8.75 12.964 8.75159 13.6116 8.81654 14.0946C8.87858 14.5561 8.9858 14.7536 9.11612 14.8839C9.24643 15.0142 9.44393 15.1214 9.90539 15.1835C10.3884 15.2484 11.036 15.25 12 15.25C12.964 15.25 13.6116 15.2484 14.0946 15.1835C14.5561 15.1214 14.7536 15.0142 14.8839 14.8839C15.0142 14.7536 15.1214 14.5561 15.1835 14.0946C15.2484 13.6116 15.25 12.964 15.25 12C15.25 11.036 15.2484 10.3884 15.1835 9.90539C15.1214 9.44393 15.0142 9.24643 14.8839 9.11612C14.7536 8.9858 14.5561 8.87858 14.0946 8.81654C13.6116 8.75159 12.964 8.75 12 8.75C11.036 8.75 10.3884 8.75159 9.90539 8.81654Z" fill="#1C274C"/>
    </svg>
    `;

    const [sound, setSound] = useState();

    async function playSound() {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
            (source = { uri: placeData.audio.data[0].attributes.url })
        );
        setSound(sound);

        console.log("Playing Sound");
        await sound.playAsync();
    }

    async function stopSound() {
        console.log("Stoping Sound");
        sound.unloadAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    return (
        <View
            style={{
                width: "100%",
                height: "88.5%",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: 0,
                borderTopLeftRadius: 90,
                borderTopRightRadius: 90,
                borderWidth: 0.168,
                backgroundColor: "#FEF8F7",
                paddingTop: "11%",
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    setisFullCard(false);
                }}
                style={{ padding: 5, marginTop: "-7%", alignItems: "center" }}
            >
                <SvgXml xml={arrowDownImage} />
            </TouchableOpacity>
            
            <View style={{ flex: 0.99 }}>
                <ScrollView>
                    <Text
                        style={{
                            fontSize: 28,
                            textAlign: "center",
                            fontWeight: 700,
                            marginTop: "5%",
                            marginBottom: "6%",
                        }}
                    >
                        {placeData["name"]}
                    </Text>

                    <View style={{ marginBottom: "10%", marginLeft: "6%" }}>
                        <View style={{ marginBottom: "6.5%" }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <SvgXml xml={addressImage} />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: 500,
                                        left: "38%",
                                    }}
                                >
                                    Адрес
                                </Text>
                            </View>
                            <Text
                                style={{
                                    marginLeft: "10.8%",
                                    marginTop: "2%",
                                    fontSize: 15,
                                }}
                            >
                                {placeData["adress"]}
                            </Text>
                        </View>

                        <View style={{ marginBottom: "6.5%" }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <SvgXml xml={descriptionImage} />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: 500,
                                        left: "38%",
                                    }}
                                >
                                    Описание
                                </Text>
                            </View>
                            <Text
                                style={{
                                    marginLeft: "10.8%",
                                    marginTop: "2%",
                                    fontSize: 15,
                                    maxWidth: "80%",
                                }}
                            >
                                {placeData["description"]}
                            </Text>
                        </View>

                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <SvgXml xml={audioImage} />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: 500,
                                        left: "38%",
                                    }}
                                >
                                    Аудио материалы
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: "25%",
                                    marginLeft: "10.75%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={playSound}
                                    style={{ padding: 2.5 }}
                                >
                                    <SvgXml xml={playImage} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={stopSound}
                                    style={{ padding: 2.5 }}
                                >
                                    <SvgXml xml={stopImage} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View
                            style={{
                                height: 300,
                                marginLeft: "-6.75%",
                                top: 25,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                source={{
                                    uri: placeData.picture.data[0].attributes
                                        .url,
                                }}
                                resizeMode="cover"
                                style={{
                                    borderColor: "#4682b0",
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    width: "90%",
                                    height: "100%",
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
