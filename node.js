const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simulated in-memory database (array)
const products = [];

// Route to handle adding a product
app.post('/add-product', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).send('Missing name or price');
  }
  
  products.push({ name, price });
  console.log('Product added:', { name, price });

  res.status(200).send('Product added');
});

// Server listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
