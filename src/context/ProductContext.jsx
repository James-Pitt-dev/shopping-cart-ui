import { useState, useEffect, useContext, createContext } from 'react';

const ProductContext = createContext(); // We will import this with const {1,2,3} useContext(productcontext) wherever we need this state

export function ProductProvider({children}){ //need to wrap <app> component in main.jsx with productprovider, then it will come in as children prop, which we use in or below return and pass in the value attribute as global state

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
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])

  return (
    <ProductContext.Provider value={{products, loading, error}}>
        {children}
    </ProductContext.Provider>
  )
}

export function useProducts(){
    return useContext(ProductContext)
}
