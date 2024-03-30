import { useId } from "react";
import useAppContext from "../../store/AppContext";
import styles from "./Cart.module.css"
import { IoCartSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
    const cartCheckboxId = useId();
    const { store } = useAppContext();

    return (
        <>
            <label className={styles.cart_button} htmlFor={cartCheckboxId}>
                <IoCartSharp/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className={styles.cart}>
                <ul>
                    {store.cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.images} alt={item.title} />
                            <div>
                                <strong>{item.title}</strong> - $ {item.price}
                            </div>
                            <footer>
                                <small>Qty: {item.quantity}</small>
                                <button>+</button>
                            </footer>
                        </li>
                    ))}
                </ul>
                <button><IoCartOutline/></button>
            </aside>
        </>
    );
};

export default Cart;
