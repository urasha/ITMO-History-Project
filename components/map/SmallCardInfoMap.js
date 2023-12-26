import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";

export default function SmallCardInfoMap({ name }) {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <View
            style={{
                width: "100%",
                height: "38%",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: isOpen ? 0 : "-100%",
                borderTopLeftRadius: 2000,
                borderTopRightRadius: 2000,
                borderWidth: 2,
                padding: 50,
            }}
        >
            <TouchableOpacity onPress={() => setIsOpen(false)}>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: "center"
                    }}
                >
                    Закрыть
                </Text>
            </TouchableOpacity>

            <Text
                style={{ fontSize: 26, textAlign: "center", marginTop: "10%" }}
            >
                {/*name*/}Невская застава
            </Text>
            
            <TouchableOpacity>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: "center",
                        padding: 20,
                        marginTop: "10%",
                    }}
                >
                    Подробнее
                </Text>
            </TouchableOpacity>
        </View>
    );
}
