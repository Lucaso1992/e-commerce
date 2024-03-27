const getProducts = async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        console.log(json)
        return json; 
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}

export default getProducts;
