import styles from "./Header.module.css";
import Filters from "../Filters/Filters";

const Header = () => {
    return(
        <header>
            <h1>Lucky Shop</h1>
            <Filters/>
        </header>
    )
}

export default Header;