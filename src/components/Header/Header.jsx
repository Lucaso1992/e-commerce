import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Filters from "../Filters/Filters";


const Header = () => {

    return(
        <header>
            <h1 className={styles.title}>LUCKY SHOP</h1>
            <Filters/>
        </header>
    )
}

export default Header;