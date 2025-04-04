import dotenv from 'dotenv'
import express from 'express'
// const Razorpay = require("razorpay");
import Razorpay from 'razorpay'
// const cors = require("cors");
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: rzp_test_iO5uECySEbIMu7, // 🔥 Replace with your Test Key
  key_secret: mhQfnWebAg3pOqFgHD7zLjBA, // 🔥 Replace with your Test Secret
});

app.post("/razorpay-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount,
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Error creating order" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
