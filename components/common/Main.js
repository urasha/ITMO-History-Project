import Navbar from "../navbar/Navbar"
import MapPage from "../map/MapPage"
import { useState } from "react";

export default function Main() {
    const [isOpen, setisOpen] = useState(false);

    return (
        <>
            <Navbar isOpen={isOpen} setisOpen={setisOpen} />
            <MapPage isOpen={isOpen} />
        </>
    )
}