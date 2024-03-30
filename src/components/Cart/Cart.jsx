import { useId, useEffect } from "react";
import useAppContext from "../../store/AppContext";
import styles from "./Cart.module.css"
import { IoCartSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Cart = () => {
    const cartCheckboxId = useId();
    const { store, actions } = useAppContext();

const handleEliminateProduct = (index) => {
    actions.setCart(prevState => prevState.filter((_, i) => i !== index));
}

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
                                <button>-</button>
                            </footer>
                            <button onClick={() => handleEliminateProduct(index)}><IoMdCloseCircleOutline /></button>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default Cart;
