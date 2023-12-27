import { useRef } from "react";
import { Text, TouchableOpacity, View, Animated } from "react-native";
import { SvgXml } from "react-native-svg";

export default function FullCardInfoMap({ setisFullCard }) {
    const arrowDownImage = `<?xml version="1.0" encoding="utf-8"?>
    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ee1546"/>
    </svg>`;

    const addressImage = `<?xml version="1.0" ?>
    <svg width="30px" height="30px" viewBox="0 0 8.4666669 8.4666669" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg">
    <defs id="defs2"/>
    <g id="layer1" transform="translate(0,-288.53332)">
    <path d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z" id="path929" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"/>
    </g>
    </svg>`;

    const descriptionImage = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,7H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM3,20V9H21V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Zm3-6H18V12H6Zm0,4h6V16H6Z"/></svg>`;

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
            <Text
                style={{
                    fontSize: 28,
                    textAlign: "center",
                    fontWeight: 700,
                    marginTop: "5%",
                    marginBottom: "6%",
                }}
            >
                Невская застава {/* Название из БД */}
            </Text>

            <View style={{ marginBottom: "10%", marginLeft: "6%" }}>
                <View style={{marginBottom: "6.5%"}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <SvgXml xml={addressImage} />
                        <Text style={{ fontSize: 17, fontWeight: 500, left: "38%" }}>
                            Адрес {/* адрес из БД */}
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginLeft: "10.8%",
                            marginTop: "2%",
                            fontSize: 15,
                        }}
                    >
                        ул. Салова, д. 61
                    </Text>
                </View>

                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <SvgXml xml={descriptionImage} />
                        <Text style={{ fontSize: 17, fontWeight: 500, left: "38%" }}>
                            Описание {/* описание из БД */}
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginLeft: "10.8%",
                            marginTop: "2%",
                            fontSize: 15,
                            maxWidth: "80%",
                            textAlign: "justify"
                        }}
                    >
                        Тут интересное большое описание нашего объекта, которое все прочитают, я уверен в этом! Урааа!
                    </Text>
                </View>

                {/* Картинку для объекта еще мб? */}
            </View>
        </View>
    );
}
