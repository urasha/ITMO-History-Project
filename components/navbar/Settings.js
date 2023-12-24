import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useForm, Controller } from "react-hook-form";
import * as React from "react";

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

    const onSubmit = (data) => {
        console.log(data);
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
                <Text style={styles.label}>Размер шрифта</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <NumericInput
                            onLimitReached={(isMax, msg) => console.log(msg)}
                            maxValue={20}
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
