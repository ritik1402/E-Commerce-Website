import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields!");
      return;
    }
    console.log("Signup Data:", formData);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
