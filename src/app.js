const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api/home', (req, res) => {
  res.send({
    total_students: 10,
    total_books: 100,
    books_checked_out: 60,
    books_due: 20,
  });
});

// A route to handle GET requests to /users
app.get('/api/books/due', (req, res) => {
  const users = [
    { book_id: 1, book_name: "Book Name", },
    { id: 2, name: 'Bob' }
  ];
  res.json(users);
});

// A route to handle POST requests to /users
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Here you would normally add the new user to your database
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
