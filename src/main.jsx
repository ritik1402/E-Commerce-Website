import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'
// import CartContext from './CartContext.jsx'
import { CartProvider } from "./CartContext";  // ✅ Ensure CartProvider wraps App

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
   
  </BrowserRouter>,
)
