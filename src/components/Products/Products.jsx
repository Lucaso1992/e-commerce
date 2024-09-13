import { useEffect } from "react";
import useAppContext from "../../store/AppContext";

import Card from "../Card/Card";
import styles from "./Products.module.css";

const Products = ({ products }) => {
const { store, actions } = useAppContext();

useEffect(() => {
    console.log(store.products)
}, [products])

    return (
        <main>
            <div className={styles.products_container}>
                {products.map(product => (
                    <Card id={product.id} images={product.image} title={product.title} price={product.price} />
                ))}
            </div>
        </main>
    )
}

export default Products;