import { useState } from "react";
import '../styles/Login.css';

console.log("✅ Login Component Imported!");

const Login = () => {
  console.log("✅ Login Component Rendered!");

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill all fields!");
      return;
    }
    console.log("Login Data:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
