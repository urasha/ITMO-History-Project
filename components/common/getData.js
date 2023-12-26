import AsyncStorage from "@react-native-async-storage/async-storage";

export default getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
};