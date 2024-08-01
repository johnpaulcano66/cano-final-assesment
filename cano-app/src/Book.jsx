// src/Book.js
import React from "react";
import "./Book.css";

const Book = ({ index, book, toggleStatus }) => {
  return (
    <li className="book-item">
      <span>{index + 1}</span>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <span>{book.status === "Checked Out" ? book.dueDate : ""}</span>
      <span>{book.status}</span>
      <button
        className={`status-button ${
          book.status === "Checked Out" ? "checked-out" : "available"
        }`}
        onClick={() => toggleStatus(index)}
      >
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">Toggle Status</span>
      </button>
    </li>
  );
};

export default Book;
