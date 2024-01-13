// Import necessary modules (express, nodemailer, cors)

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
// Nodemailer setup
app.post("/send-email", async (req, res) => {
  const { fname, lname, email, subject, message } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "Gmail", // Update this with your email service (e.g., "Yahoo")
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Update this with your email address
    subject: `New Contact Form Submission - ${subject}`,
    text: `
      From: ${fname} ${lname}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("success");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
