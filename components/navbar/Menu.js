import { View, StyleSheet } from "react-native";
import Header from "./Header";
import ExitButton from "./ExitButton";
import MenuList from "./MenuList";
import { useEffect, useState } from "react";
import FavouritePlaces from "./FavouritePlaces";
import AddFavouritePlaceForm from "./AddFavouritePlaceForm";
import FavouritePlaceInfoPage from "./FavouritePlaceInfoPage";
import Routes from "./Routes";
import Settings from "./Settings";
import getData from "../common/getData";
import axios from "axios";
import RouteInfoPage from "./RouteInfoPage";

export default function Menu({
    isOpen,
    setisOpen,
    setisLogin,
    setIsRouteStarted,
}) {
    const manIcon = `
    <svg width="21" height="30" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.14984 19.6856L5.17908 17.0209L4.10611 20.5809C3.96013 20.7727 3.14263 21.9281 1.04048 25.0149C0.760196 26.7373 2.00396 26.6137 2.66088 26.3365L3.40539 25.6331C3.83604 25.1072 4.83748 23.8552 5.39805 23.0537C5.95862 22.2522 6.41993 21.5117 6.58051 21.2417L7.14984 19.6856Z" fill="#E8DED4" stroke="#535352" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.31777 6.55411H8.50757H7.47839C7.12804 6.55411 6.79228 6.75307 6.66819 6.85255C5.62442 7.70524 3.43177 9.48737 3.01134 9.79433C2.59091 10.1013 2.39821 10.5475 2.35442 10.7323C2.16464 11.9616 1.76319 14.693 1.6756 15.7845C1.91647 16.893 3.2741 16.7225 3.49308 15.9124L4.25948 11.5424L6.49301 9.92224C6.30324 10.8034 5.87551 12.8342 5.68281 13.9086C5.49012 14.983 5.90908 15.7916 6.14266 16.0616C8.2813 19.2521 12.6111 25.7013 12.8213 25.9741C13.1279 26.2726 13.2374 26.2939 13.4783 26.4218C15.5804 26.8482 15.1206 24.9509 15.1206 24.9509C15.1206 24.9509 14.9089 24.3256 14.814 24.1622L9.38346 15.486L10.2594 11.9474C10.4418 12.1961 10.855 12.7702 11.0477 13.0772C11.2404 13.3842 11.4929 13.5462 11.5951 13.5888L15.8213 15.4434C17.4417 15.6566 17.1132 14.1004 16.4782 13.802L12.5367 11.9047C11.8871 10.5475 10.5221 7.71803 10.2594 7.25758C9.99659 6.79712 9.52215 6.59674 9.31777 6.55411Z" fill="#E8DED4" stroke="#535352" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="9.50033" cy="3.01544" rx="2.58389" ry="2.51544" fill="#E8DED4" stroke="#535352"/>
    </svg>
    `;

    const backArrowIcon = `
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 7.78416 0.118526 8.05668 0.329505 8.25761L7.0795 14.6862C7.51884 15.1046 8.23116 15.1046 8.6705 14.6862C9.10983 14.2678 9.10983 13.5894 8.6705 13.171L2.71599 7.5L8.6705 1.82904C9.10983 1.41062 9.10983 0.732233 8.6705 0.313814C8.23116 -0.104605 7.51884 -0.104605 7.0795 0.313814L0.329505 6.74238C0.118526 6.94332 0 7.21584 0 7.5Z" fill="#E8DED4" fill-opacity="0.3"/>
    </svg>
    `;

    const [userName, setUserName] = useState("Anonymous");
    const [currentPage, setCurrentPage] = useState("MenuList");
    const [stackOfPages, setStackOfPages] = useState(["MenuList"]);

    const [favouritePlacesData, setFavouritePlacesData] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [routeInfo, setRouteInfo] = useState({});
    const [favouritePlaceInfo, setFavouritePlaceInfo] = useState({});

    async function getDataFromDb() {
        const id = await getData("id");

        // get username
        // axios
        //     .get(`http://89.104.68.107:1337/api/users/${id}`, {
        //         headers: {
        //             Authorization:
        //                 "Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f",
        //         },
        //     })
        //     .then((response) => {
        //         setUserName(response.data["username"]);
        //     })
        //     .catch((error) => {
        //         console.log("ERROR WITH USERS!!!");
        //     });

        fetch(`http://89.104.68.107:1337/api/users/${id}`, {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer 36455c970cf5f1f44aaef68fcb596fc250b7add438e08bb87f6d1b1b690bb1a3a2058c6435a86a385343553dfbcff1c2cfa8139e6e8867398414f19f61eab5410800e763c9767569f1bb6488e95a8c7e7d665f11a8c7b64eaf45e72371c725678adc9db78f62e408516b2c015bec78bf519ce0ba59a0f190a39bb3ddbfeee61f",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                setUserName(response.data["username"]);
            })
            .catch((error) => {
                console.log("ERROR WITH USERS!!!");
            });
    }

    useEffect(() => {
        getDataFromDb();
    }, []);

    const textVars = {
        MenuList: userName,
        FavouritePlaces: "Любимые места",
        Settings: "Настройки",
        AddFavouritePlaceForm: "Любимые места",
        FavouritePlaceInfoPage: "Любимые места",
        Routes: "Маршруты",
        RouteInfoPage: "Маршруты",
    };

    return (
        <View style={[styles.container, { top: isOpen ? 0 : "-100%" }]}>
            <Header
                textVars={textVars}
                text={textVars[currentPage]}
                changableIcon={
                    currentPage === "MenuList" ? manIcon : backArrowIcon
                }
                setStackOfPages={setStackOfPages}
                stackOfPages={stackOfPages}
                setCurrentPage={setCurrentPage}
            />
            {currentPage === "MenuList" ? (
                <MenuList
                    textVars={textVars}
                    setCurrentPage={setCurrentPage}
                    setStackOfPages={setStackOfPages}
                    stackOfPages={stackOfPages}
                />
            ) : null}
            {currentPage === "FavouritePlaces" ? (
                <FavouritePlaces
                    setFavouritePlacesData={setFavouritePlacesData}
                    favouritePlacesData={favouritePlacesData}
                    setCurrentPage={setCurrentPage}
                    setStackOfPages={setStackOfPages}
                    stackOfPages={stackOfPages}
                    setFavouritePlaceInfo={setFavouritePlaceInfo}
                />
            ) : null}
            {currentPage === "AddFavouritePlaceForm" ? (
                <AddFavouritePlaceForm
                    favouritePlacesData={favouritePlacesData}
                    setFavouritePlacesData={setFavouritePlacesData}
                    setCurrentPage={setCurrentPage}
                    setStackOfPages={setStackOfPages}
                    stackOfPages={stackOfPages}
                />
            ) : null}
            {currentPage === "FavouritePlaceInfoPage" ? (
                <FavouritePlaceInfoPage
                    favouritePlaceInfo={favouritePlaceInfo}
                    favouritePlacesData={favouritePlacesData}
                    setFavouritePlacesData={setFavouritePlacesData}
                    setCurrentPage={setCurrentPage}
                    setStackOfPages={setStackOfPages}
                    stackOfPages={stackOfPages}
                />
            ) : null}
            {currentPage === "Routes" ? (
                <Routes
                    setRoutes={setRoutes}
                    setRouteInfo={setRouteInfo}
                    routes={routes}
                    setCurrentPage={setCurrentPage}
                    setStackOfPages={setStackOfPages}
                    stackOfPages={stackOfPages}
                />
            ) : null}
            {currentPage === "Settings" ? (
                <Settings
                    setCurrentPage={setCurrentPage}
                    setStackOfPages={setStackOfPages}
                    stackOfPages={stackOfPages}
                    setisLogin={setisLogin}
                />
            ) : null}
            {currentPage === "RouteInfoPage" ? (
                <RouteInfoPage
                    setIsRouteStarted={setIsRouteStarted}
                    route={routeInfo}
                    setCurrentPage={setCurrentPage}
                    setStackOfPages={setStackOfPages}
                    stackOfPages={stackOfPages}
                />
            ) : null}
            <ExitButton
                setisOpen={setisOpen}
                setStackOfPages={setStackOfPages}
                setCurrentPage={setCurrentPage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#252525E5",
        position: "absolute",
    },
});
