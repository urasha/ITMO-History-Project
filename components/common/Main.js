import Navbar from "../navbar/Navbar";
import MapPage from "../map/MapPage";
import { useState, useEffect } from "react";
import IntroPages from "../beginner/IntroPages";
import getData from "./getData";

export default function Main() {
    const [isOpen, setisOpen] = useState(false);
    const [isLogin, setisLogin] = useState();
    const [isRouteStarted, setIsRouteStarted] = useState();

    const getIsRouteStarted = async () => {
        return (await getData("isRouteStarted")) == true ? true : false;
    };

    const checkLogin = async () => {
        setisLogin(await getData("id") != null ? true : false);
    };

    useEffect(() => {
        checkLogin();
    }, []);

    useEffect(() => {
        setIsRouteStarted(getIsRouteStarted());
    }, []);

    return (
        <>
            {isLogin == false ? (
                <IntroPages setisLogin={setisLogin} />
            ) : (
                <>
                    <Navbar
                        isOpen={isOpen}
                        setisOpen={setisOpen}
                        setisLogin={setisLogin}
                        setIsRouteStarted={setIsRouteStarted}
                    />
                    <MapPage isOpen={isOpen} isRouteStarted={isRouteStarted} setIsRouteStarted={setIsRouteStarted} />
                </>
            )}
        </>
    );
}
