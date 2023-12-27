import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import axios from "axios";
import { SvgXml } from "react-native-svg";
import { TouchableOpacity } from "react-native";

export default function Settings({ setisLogin }) {
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

    const onSubmit = async (data) => {
        const id = await getData("id");

        axios
            .put(`http://89.104.68.107:1337/api/users/${id}`, {
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
        <View style={{ padding: 20 }}>
            <View>
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
                    title="Сохранить"
                    onPress={() => {
                        handleSubmit(onSubmit)();
                    }}
                />
            </View>

            <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => setisLogin(false)}
            >
                <Text
                    style={[
                        styles.label,
                        { marginLeft: 5, color: "#ed153a", fontSize: 16, marginTop: 35 },
                    ]}
                >
                    Выйти из аккаунта
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: "white",
        margin: 20,
        marginLeft: 0,
        fontSize: 14,
    },
    button: {
        marginTop: 15,
        color: "white",
        height: "15%",
        justifyContent: "center",
        width: "39%",
        backgroundColor: "#ec5990",
        borderRadius: 4,
    },
    container: {
        paddingHorizontal: 20,
    },
    input: {
        backgroundColor: "white",
        height: 40,
        width: "80%",
        padding: 10,
        borderRadius: 4,
        marginBottom: 12,
    },
});
