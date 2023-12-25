import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Settings() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            fontSize: 15,
        },
    });

    const setData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async (key) => {
        try {
            const savedUser = await AsyncStorage.getItem(key);
            return JSON.parse(savedUser);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async (data) => {
        // const url = "https://hist-museum.onrender.com/api/users/:2";

        // axios
        //     .put(url, {
        //         username: data["username"],
        //     },)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log("An error occurred:", error.response);
        //     });
        
        setData("fontSize", data["fontSize"]);
    };

    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Отображаемое имя</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            maxLength={31}
                        />
                    )}
                    name="username"
                    rules={{ required: true }}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>
                    Размер текста описания объектов
                </Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <NumericInput
                            onLimitReached={(isMax, msg) => console.log(msg)}
                            maxValue={18}
                            minValue={15}
                            totalWidth={150}
                            totalHeight={40}
                            step={1}
                            onChange={(value) => onChange(value)}
                            value={Number(value)}
                            valueType="real"
                            rounded
                            textColor="#fff"
                            iconStyle={{ color: "white" }}
                            rightButtonBackgroundColor="#EA3788"
                            leftButtonBackgroundColor="#E56B70"
                            borderColor="#bbbbbb"
                        />
                    )}
                    name="fontSize"
                    rules={{ required: true }}
                />
            </View>

            <View>
                <View style={styles.button}>
                    <Button
                        color="#fff"
                        style={styles.buttonInner}
                        title="Сохранить"
                        onPress={() => {
                            handleSubmit(onSubmit)();
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: "white",
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 30,
        color: "white",
        height: 52,
        justifyContent: "center",
        width: "48%",
        backgroundColor: "#ec5990",
        borderRadius: 4,
    },
    container: {
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: "white",
        height: 40,
        width: 200,
        padding: 10,
        borderRadius: 4,
        marginBottom: 12,
    },
});
