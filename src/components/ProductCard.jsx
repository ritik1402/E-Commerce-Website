import React ,{useContext} from 'react'
import '../styles/ProductCard.css'
import {useNavigate} from 'react-router-dom'
import CartContext from "../CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Access context

  const navigate = useNavigate();
  return (
    <div className='product-card' onClick={()=> navigate(`/product/${product.id}`)}>
      <img src= {product.image} alt="{product.name}" className="product-image"></img>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="view-details" onClick={() => addToCart(product)} >View Details</button>
    </div>
  )
}

export default ProductCard
