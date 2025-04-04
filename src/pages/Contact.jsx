import React, { useState } from 'react';
import '../styles/Contact.css'; // You can style later
// import Chatbot from '../components/Chatbot'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  // const [showChat, setShowChat] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSe_29nYzAcPbi-waLwWPYH-7V1z3DhtG5Lg22d3GUnG1xKL2A/formResponse";

    const form = document.createElement("form");
    form.action = formURL;
    form.method = "POST";
    form.target = "_blank"; // Optional: open in new tab

    const formFields = {
      "entry.1987550521": formData.name,
      "entry.348360100": formData.email,
      "entry.154858852": formData.message
    };

    for (const field in formFields) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = field;
      input.value = formFields[field];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <div className="contact-container">
      <h1 className="">Contact Us</h1>

      {submitted && <p className="success">Your message has been sent!</p>}
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
      </div>
    </div>
    {/* ✅ Chatbot Toggle Button
    <div className="chat-button-container">
            <button className="chat-toggle-btn" onClick={() => {setShowChat(!showChat);
              console.log("button is triggerring and state is changign");
            }}>
              💬 Chat
            </button>
          </div>

          {/* ✅ Show chatbot when showChat is true */}
          {/* {showChat && (<div className="chatbot-container">
            <Chatbot/>
          // </div>)} */}

    </>

    
  );
};

export default Contact;
