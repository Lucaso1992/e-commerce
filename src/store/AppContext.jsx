import { useContext, createContext, useState, useEffect } from "react";
import getProducts from "../utils/getProducts";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 0
    })
    const [cart, setCart] = useState([])

    useEffect(() => {
      console.log(cart)
    }, [cart])
    
   useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const store = {products, filters, cart}

    const actions = {setFilters, setCart}

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
