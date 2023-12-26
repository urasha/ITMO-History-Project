import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { SvgXml } from "react-native-svg";

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

    const logoutImage = `
    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
`;

    const onSubmit = async (data) => {
        const id = await getData("id");

        axios
            .put(`https://hist-museum.onrender.com/api/users/${id}`, {
                headers: {
                    Authorization:
                        "Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f",
                },
                username: data.username,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
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

            <View>
                <SvgXml xml={logoutImage} />
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
