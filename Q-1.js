const http = require('http');

// Sample data for men and women products
const menProducts = [
  { id: 1, name: 'Men Product 1', price: 20.99 },
  { id: 2, name: 'Men Product 2', price: 25.49 },
  // Add more product objects as needed
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', price: 30.99 },
  { id: 2, name: 'Women Product 2', price: 35.49 },
  // Add more product objects as needed
];

const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'application/json');

  // Handle different API endpoints
  if (req.url === '/') {
    res.end(JSON.stringify({ message: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url === '/men') {
    res.end(JSON.stringify(menProducts.slice(0, 10)));
  } else if (req.url === '/women') {
    res.end(JSON.stringify(womenProducts.slice(0, 10)));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Page not found' }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
