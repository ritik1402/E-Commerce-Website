import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./CartContext";
import Footer from "./components/Footer";
import { useState } from "react";
import "./styles/App.css";
import Chatbot from "./components/Chatbot";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false); // 👈 FIX: State define kar diya

  return (
    <>
      <div className="main-content">
        <CartProvider>
          {/* {showChat && <Chatbot />} */}

          <Navbar onSearch={setSearchQuery} />

         {/* ✅ Chatbot Toggle Button */}
         <div className="chat-button-container">
            <button className="chat-toggle-btn" onClick={() => {setShowChat(!showChat);
              console.log("button is triggerring and state is changign");
            }}>
              💬 Chat
            </button>
          </div>

          {/* ✅ Show chatbot when showChat is true */}
          {showChat && (<div className="chatbot-container">
            <Chatbot/>
          </div>)}

          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/chatbot" element={<Chatbot />} /> */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>

          <Footer />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
