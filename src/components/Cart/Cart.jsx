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

    const handleIncrementQuantity = (index) => {
        actions.setCart((prevState) =>
            prevState.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrementQuantity = (index) => {
        actions.setCart((prevState) =>
            prevState.map((item, i) =>
                i === index && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        store.cart.forEach(product => {
          totalPrice += product.price * product.quantity;
        });
        return totalPrice;
      };

      const totalCartPrice = calculateTotalPrice();

    return (
        <>
            <label className={styles.cart_button} htmlFor={cartCheckboxId}>
                <IoCartSharp />
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
                                <small className={styles.quantity}>Qty: {item.quantity}</small>
                                <button onClick={() => handleIncrementQuantity(index)}>+</button>
                                <button onClick={() => handleDecrementQuantity(index)}>-</button>
                            </footer>
                            <button onClick={() => handleEliminateProduct(index)}><IoMdCloseCircleOutline /></button>
                        </li>
                    ))}
                    <li className={styles.total}>Total: {totalCartPrice.toFixed(2)}</li>
                </ul>
            </aside>
        </>
    );
};

export default Cart;
