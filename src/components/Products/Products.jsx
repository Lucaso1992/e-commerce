import Card from "../Card/Card";
import styles from "./Products.module.css";

const Products = ({ products }) => {

    return (
        <main>
            <div className={styles.products_container}>
                {products.map(product => (
                    <Card id={product.id} images={product.images[0]} title={product.title} price={product.price} />
                ))}
            </div>
        </main>
    )
}

export default Products;