import styles from "./Card.module.css";
import { FaCartPlus } from "react-icons/fa";

const Card = ({ id, images, title, price }) => {
    return (
        <div key={id} className={styles.card_container}>
            <div className={styles.img_container}>
                <img src={images} alt={title} className={styles.img}/>
            </div>
            <p className={styles.title_price}><strong>{title}</strong> - $ {price}</p>
            <div className={styles.button}><button><FaCartPlus /></button></div>
        </div>
    )
}

export default Card;