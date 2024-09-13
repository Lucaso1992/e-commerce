import useAppContext from "../../store/AppContext";
import { useState, useId } from "react";
import styles from "./Filters.module.css";

const Filters = () => {
    const { actions } = useAppContext();
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilteredId = useId();
    const categoryFilteredId = useId();

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        actions.setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleChangeCategory = (event) => {
        const selectedCategory = event.target.value;
        console.log(selectedCategory)
        actions.setFilters(prevState => ({
            ...prevState,
            category: selectedCategory,
        }))
    }

    return(
        <section className={styles.filters_container}>
            <div>
                <label htmlFor={minPriceFilteredId}>Min Price</label>
                <input type="range" 
                id={minPriceFilteredId}
                min='0'
                max='100' 
                onChange={handleChangeMinPrice}/>       
                <span>$ {minPrice}</span>
            </div>
            <div>
                <label className={styles.category} htmlFor={categoryFilteredId}>Category</label>
                <select id={categoryFilteredId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
            </div>
        </section>
    )
}

export default Filters;