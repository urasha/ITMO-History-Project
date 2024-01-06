import AsyncStorage from "@react-native-async-storage/async-storage";

export default getData = async (key) => {
    try {
        return JSON.parse(await AsyncStorage.getItem(key));
    } catch (e) {
        return null;
    }
};