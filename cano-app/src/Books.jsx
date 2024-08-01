// src/Books.js
import React, { useState, useEffect } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";
import "./Books.css";

const Books = () => {
  const generateRandomDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + randomDays);
    return dueDate.toLocaleDateString();
  };

  const initialBooks = [
    {
      title: "Book 1",
      author: "John",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    { title: "Book 2", author: "Jane", dueDate: "", status: "Available" },
    {
      title: "Book 3",
      author: "Mike",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    { title: "Book 4", author: "Lisa", dueDate: "", status: "Available" },
    {
      title: "Book 5",
      author: "John",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    { title: "Book 6", author: "Jane", dueDate: "", status: "Available" },
    {
      title: "Book 7",
      author: "Mike",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    { title: "Book 8", author: "Lisa", dueDate: "", status: "Available" },
    {
      title: "Book 9",
      author: "John",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
    {
      title: "Book 10",
      author: "Jane",
      dueDate: generateRandomDate(),
      status: "Checked Out",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const result = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    setFilteredBooks(result);
  }, [searchQuery, books]);

  const toggleStatus = (index) => {
    const newBooks = [...books];
    newBooks[index].status =
      newBooks[index].status === "Checked Out" ? "Available" : "Checked Out";
    if (newBooks[index].status === "Checked Out") {
      newBooks[index].dueDate = generateRandomDate();
    } else {
      newBooks[index].dueDate = "";
    }
    setBooks(newBooks);
  };

  return (
    <div className="books-container">
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <h2>Books List</h2>
      <ul className="books-list">
        <li className="books-list-header">
          <span>No.</span>
          <span>Title</span>
          <span>Author</span>
          <span>Due Date</span>
          <span>Status</span>
          <span>Action</span>
        </li>
        {filteredBooks.map((book, index) => (
          <Book
            key={index}
            index={index}
            book={book}
            toggleStatus={() => toggleStatus(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Books;
