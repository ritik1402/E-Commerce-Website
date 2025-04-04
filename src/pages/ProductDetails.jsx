import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import CartContext from "../CartContext";
import Cart from "./Cart";

const products = [
  { id: 1, name: "Nike Shoes", price: 59.99, image: "/images/Shoe1.jpg", description: "Comfortable running shoes." },
  { id: 2, name: "Adidas Sneakers", price: 69.99, image: "/images/Shoe2.jpg", description: "Stylish sneakers for daily use." },
  { id: 3, name: "Puma Running", price: 49.99, image: "/images/Shoe3.jpg", description: "Lightweight and durable." },
];

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button onClick={() => {
  addToCart(product);
  // console.log("Cart after adding:", cart);  // ✅ Check if the cart updates
}}>
  Add to Cart
</button>
    </div>
  );
};

export default ProductDetails;
