import useAppContext from "../../store/AppContext";
import { useState } from "react";
import styles from "./Filters.module.css";

const Filters = () => {
    const { actions } = useAppContext();
    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        actions.setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    return(
        <section className={styles.filters_container}>
            <div>
                <label htmlFor="">Min Price</label>
                <input type="range" 
                id='price'
                min='0'
                max='200' 
                onChange={handleChangeMinPrice}/>
                <span>$ {minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="all">All</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            </div>
        </section>
    )
}

export default Filters;