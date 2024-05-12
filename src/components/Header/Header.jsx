import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Filters from "../Filters/Filters";
import audio from "../../assets/laser.mp3"

const Header = () => {

//     const [saludo, setSaludo] = useState(false);

// useEffect(() => {
//     console.log(saludo)}
//     ,[saludo])

    return(
        <header>
            <h1>Lucky Shop</h1>
            {/* <button onClick={() => setSaludo(!saludo)}>BOTON</button> */}
            <Filters/>
        </header>
    )
}

export default Header;