import * as React from "react";
import { useState } from "react";
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
    setFavouritePlacesData,
    favouritePlacesData,
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
            title: "",
            description: "",
            address: "",
        },
    });
    const onSubmit = (data) => {
        console.log(data);
        favouritePlacesData.push(data);
        setFavouritePlacesData(favouritePlacesData)
        stackOfPages.pop();
        setCurrentPage(stackOfPages.at(-1));
        setStackOfPages(stackOfPages);
    };

    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    console.log("errors", errors);

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
                name="title"
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
                        color="#ec5990"
                        style={styles.buttonInner}
                        title="Сбросить"
                        onPress={() => {
                            reset({
                                title: "",
                                description: "",
                                address: "",
                            });
                            Keyboard.dismiss();
                        }}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        color="#ec5990"
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
