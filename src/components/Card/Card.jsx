import useAppContext from "../../store/AppContext";
import styles from "./Card.module.css";
import { FaCartPlus } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";

const Card = ({ id, images, title, price }) => {
    const { actions, store } = useAppContext();
    const quantity = 1;
    const isInCart = store.cart.some(item => item.id === id);

    const addToCart = () => {
        if (isInCart) {
            actions.setCart(prev => prev.filter(item => item.id !== id));
        } else {
            const item = { id, images, title, price, quantity };
            actions.setCart(prev => prev.concat(item));
        }
    }

    return (
        <div key={id} className={`${styles.card_container} ${isInCart ? styles.selected : ''}`}>
            <div className={styles.img_container}>
                <img src={images} alt={title} className={styles.img}/>
            </div>
            <p className={styles.title_price}><strong>{title}</strong> - $ {price}</p>
            <div className={styles.button}>
                {isInCart ? (
                    <button className={`${styles.add_button} ${styles.selected}`} onClick={addToCart}><BsCartXFill className={styles.add_icon} /></button>
                ) : (
                    <button className={styles.add_button} onClick={addToCart}><FaCartPlus className={styles.add_icon} /></button>
                )}
            </div>
        </div>
    )
}

export default Card;
