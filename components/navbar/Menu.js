import { View, StyleSheet } from "react-native";
import Header from "./Header";
import ExitButton from "./ExitButton";
import MenuList from "./MenuList";

export default function Menu({ isOpen, setisOpen }) {
    const manIcon = `
    <svg width="25" height="34" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.14984 19.6856L5.17908 17.0209L4.10611 20.5809C3.96013 20.7727 3.14263 21.9281 1.04048 25.0149C0.760196 26.7373 2.00396 26.6137 2.66088 26.3365L3.40539 25.6331C3.83604 25.1072 4.83748 23.8552 5.39805 23.0537C5.95862 22.2522 6.41993 21.5117 6.58051 21.2417L7.14984 19.6856Z" fill="#E8DED4" stroke="#535352" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.31777 6.55411H8.50757H7.47839C7.12804 6.55411 6.79228 6.75307 6.66819 6.85255C5.62442 7.70524 3.43177 9.48737 3.01134 9.79433C2.59091 10.1013 2.39821 10.5475 2.35442 10.7323C2.16464 11.9616 1.76319 14.693 1.6756 15.7845C1.91647 16.893 3.2741 16.7225 3.49308 15.9124L4.25948 11.5424L6.49301 9.92224C6.30324 10.8034 5.87551 12.8342 5.68281 13.9086C5.49012 14.983 5.90908 15.7916 6.14266 16.0616C8.2813 19.2521 12.6111 25.7013 12.8213 25.9741C13.1279 26.2726 13.2374 26.2939 13.4783 26.4218C15.5804 26.8482 15.1206 24.9509 15.1206 24.9509C15.1206 24.9509 14.9089 24.3256 14.814 24.1622L9.38346 15.486L10.2594 11.9474C10.4418 12.1961 10.855 12.7702 11.0477 13.0772C11.2404 13.3842 11.4929 13.5462 11.5951 13.5888L15.8213 15.4434C17.4417 15.6566 17.1132 14.1004 16.4782 13.802L12.5367 11.9047C11.8871 10.5475 10.5221 7.71803 10.2594 7.25758C9.99659 6.79712 9.52215 6.59674 9.31777 6.55411Z" fill="#E8DED4" stroke="#535352" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="9.50033" cy="3.01544" rx="2.58389" ry="2.51544" fill="#E8DED4" stroke="#535352"/>
    </svg>
    `

    return (
        <View style={[styles.container, { top: isOpen ? 0 : "-100%" }]}>
            <Header text="Мария" changableIcon={manIcon}/>
            <MenuList />
            <ExitButton setisOpen={setisOpen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#2C2C2CE5",
        position: "absolute",
    },
});