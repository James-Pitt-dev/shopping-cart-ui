import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
//productprovider is global state, it wraps a component like app as children of the provider component and we work with in prodprovider.jsx
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ProductProvider> 
       <App />
    </ProductProvider>
  </StrictMode>,
)
