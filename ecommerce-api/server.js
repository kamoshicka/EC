const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: 1000},
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: 1500},
  { id: 3, name: 'Product 3', description: 'Description for product 3', price: 2000},
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found'});
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});