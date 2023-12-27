import * as React from "react";
import { useState } from "react";
import axios from "axios";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function AddFavouritePlaceForm({
    setCurrentPage,
    setStackOfPages,
    stackOfPages,
}) {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            description: "",
            address: "",
        },
    });

    // FIXME: bad post request, 400
    const onSubmit = (data) => {
        axios
            .post("http://89.104.68.107:1337/api/liked-objects", {
                headers: {
                    Authorization:
                        "Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f",
                },
                name: data.name,
                description: data.description,
                address: data.address,
                picture: null,
                users_permissions_user: [2]
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        // favouritePlacesData.push(data);
        // setFavouritePlacesData(favouritePlacesData);
        stackOfPages.pop();
        setCurrentPage(stackOfPages.at(-1));
        setStackOfPages(stackOfPages);
    };

    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Название</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="name"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Описание</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        multiline={true}
                        style={[styles.input, styles.textArea]}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="description"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Адрес</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                    />
                )}
                name="address"
                rules={{ required: true }}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View style={styles.button}>
                    <Button
                        color="#fff"
                        style={styles.buttonInner}
                        title="Сбросить"
                        onPress={() => {
                            reset({
                                name: "",
                                description: "",
                                address: "",
                            });
                            Keyboard.dismiss();
                        }}
                    />
                </View>

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
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: "white",
        height: 40,
        padding: 10,
        borderRadius: 4,
        marginBottom: 12,
    },
    textArea: {
        height: 120,
    },
});
