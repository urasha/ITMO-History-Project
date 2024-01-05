import Navbar from "../navbar/Navbar";
import MapPage from "../map/MapPage";
import { useState } from "react";
import { Text } from "react-native";
import IntroPages from "../beginner/IntroPages";

export default function Main() {
    const [isOpen, setisOpen] = useState(false);
    const [isLogin, setisLogin] = useState(true);

    return (
        <>
            {isLogin == false ? (
                <IntroPages setisLogin={setisLogin} />
            ) : (
                <>
                    <Navbar isOpen={isOpen} setisOpen={setisOpen} setisLogin={setisLogin} />
                    <MapPage isOpen={isOpen} />
                </>
            )}
        </>
    );
}
