import useAppContext from "../../store/AppContext";
import styles from "./Card.module.css";
import { FaCartPlus } from "react-icons/fa";

const Card = ({ id, images, title, price }) => {
    const { actions } = useAppContext();
    const quantity = 1; 

    const addToCart = () => {
        const item = { id, images, title, price, quantity };
        actions.setCart(prev => prev.concat(item));
    }

    return (
        <div key={id} className={styles.card_container}>
            <div className={styles.img_container}>
                <img src={images} alt={title} className={styles.img}/>
            </div>
            <p className={styles.title_price}><strong>{title}</strong> - $ {price}</p>
            <div className={styles.button}>
                <button onClick={addToCart}><FaCartPlus /></button>
            </div>
        </div>
    )
}

export default Card;
