import React, {useState, useEffect,useRef} from 'react'
import '../styles/Chatbot.css'

const Chatbot = () => {

    const  [messages,setMessages] = useState([]);
    const  [inputMsg,setInputMsg] = useState("");
    const chatWindowRef = useRef(null) //reference for chat window

    const responses = {
        hello: "Hi there! How can I help you?",
        hi: "Hello! What do you need help with?",
        pricing: "Our pricing plans are available on our website.",
        contact: "You can contact us via email at support@example.com.",
        bye: "Goodbye! Have a great day!",
        default: "I'm not sure how to respond to that. Can you ask something else?"
      };

      const sendMessage = ()=>{
        if(!inputMsg.trim())  return;  //ignore empty message

        const userMessage = {sender: "user", text: inputMsg};
        setMessages([...messages,userMessage]); //add user message to bot

        setTimeout(() => {
            const lowerCaseMessage = inputMsg.toLowerCase();
            const botResponse = responses[lowerCaseMessage] || responses.default;
            const botMessage = { sender: "bot", text: botResponse };
     
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot response
    }, 1000);

  setInputMsg("");  // Clear input after sending
}

  //Auto scroll when new message is  arrived
  useEffect(()=>{
    chatWindowRef.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behaviour: "smooth",
    });
  },[messages])

  return (
   <div className="chatbot">
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            {msg.text}
          </p>
        ))}
      </div>

      {/* Fixed input section */}
      <div className="chat-input-section">
        <input
          type="text"
          placeholder="Enter your query here..."
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}

export default Chatbot
