// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Fake user database (for demonstration purposes)
const users = [];

// Dummy user registration endpoint
app.post('/register', (req, res) => {
  const { firstName, lastName, email, country, phone, password } = req.body;
  // You can perform validation and other logic here
  users.push({ firstName, lastName, email, country, phone, password });
  res.status(201).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});