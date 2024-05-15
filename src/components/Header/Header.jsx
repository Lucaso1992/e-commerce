import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Filters from "../Filters/Filters";
import audio from "../../assets/laser.mp3"

const Header = () => {

    return(
        <header>
            <h1>LUCKY SHOP</h1>
            <Filters/>
        </header>
    )
}

export default Header;