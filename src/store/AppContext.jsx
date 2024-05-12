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
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData.slice(0, 40));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
          setCart(JSON.parse(savedCart));
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const isProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
}

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
