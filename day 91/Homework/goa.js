const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let bookStore = new Map();

let userCollection = new Map();

bookStore.set(1, {
  title: "Book A",
  author: "Author 1",
  genre: "Fiction",
  price: 10,
  description: "A great book",
  status: "available"
});

bookStore.set(2, {
  title: "Book B",
  author: "Author 2",
  genre: "Science",
  price: 15,
  description: "An amazing science book",
  status: "available"
});

app.get('/api/books', (req, res) => {
  res.json(Object.fromEntries(bookStore));
});

app.post('/api/add_to_collection/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  if (bookStore.has(bookId)) {
    const book = bookStore.get(bookId);
    userCollection.set(bookId, book); 
    book.status = "added";
    res.json({ message: `${book.title} added to your collection.`, book });
  } else {
    res.status(404).json({ message: "Book not found." });
  }
});


app.get('/api/collection', (req, res) => {
  res.json(Object.fromEntries(userCollection));
});


app.delete('/api/remove_from_collection/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  if (userCollection.has(bookId)) {
    const book = userCollection.get(bookId);
    userCollection.delete(bookId); 
    book.status = "available"; 
    res.json({ message: `${book.title} removed from your collection.` });
  } else {
    res.status(404).json({ message: "Book not found in collection." });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
