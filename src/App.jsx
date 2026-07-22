import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

const App = () => {

  const PRODUCTS_URL = 'http://localhost:8000/products';
  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(PRODUCTS_URL);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        console.log(data);   
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])

  return ( 
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Product Catalog
      </h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">Error: {error}</div>}

      <ProductList products={products} />
    </div>
   );
}
 
export default App;