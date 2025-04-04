import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Parent component ko search data bhejna
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Logo */}
      <h2 className="logo"><Link to="/">ShopMate</Link></h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={handleSearch}
        />
        <button>🔍</button>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login" className="login-btn">Login/Signup</Link></li>
        <Link to="/cart">🛒 Cart</Link>
      </ul>

      {/* <button onClick={() => setShowChat(!showChat)}>💬 Chat</button> */}
    </nav>
  );
};

export default Navbar;
