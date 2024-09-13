const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        return json; 
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}

export default getProducts;
