import React, { useContext, useState } from "react";
import CartContext from "../CartContext";
import '../styles/Cart.css'

const Cart = () => {
  const { cart, removeFromCart,updateQuantity } = useContext(CartContext);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });

  console.log("Cart items:", cart);
  console.log("Cart component is rendering...");

  if (!cart) {
    return <p>Loading cart...</p>;
  }

  // ✅ Total Amount Calculation
  // const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // ✅ Form Input Handling
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Payment Integration Function
  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all checkout details!");
      return;
    }

    const response = await fetch("http://localhost:5000/razorpay-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount * 100 }),
    });

    const data = await response.json();

    const options = {
      key: "Your_APi_Key", // 🔥 Replace with Razorpay Key
      amount: data.amount,
      currency: "INR",
      name: "RitiX Web Solutions",
      description: "Order Payment",
      order_id: data.id,
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        setIsCheckOut(false);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="cart-item">
            <div className="cart-item-info">
            <img src={item.image} alt={item.name} width="50" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            </div>
              <div className="cart-item-actions">
              {/* ✅ Quantity Controls */}
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
              -
              </button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      <h3>Total: ₹{totalAmount}</h3>

      {cart.length > 0 && (
        <button onClick={() => setIsCheckOut(true)}>Proceed to Checkout</button>
      )}

      {isCheckOut && (
        <div>
          <h3>Check Out Details</h3>
          <form onSubmit={handlePayment}>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter Your Name.." required onChange={handleInputChange} />
            
            <label>E-mail:</label>
            <input type="email" name="email" placeholder="Enter Email.." required onChange={handleInputChange} />

            <label>Address:</label>
            <textarea name="address" placeholder="Enter Address.." required onChange={handleInputChange}></textarea>

            <button type="submit">Confirm & Pay</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
