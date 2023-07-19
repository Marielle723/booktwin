import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bookCards-container">
      {/* <div>
        <p>{book.publishedDate}</p>
      </div> */}
      <div>
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "https://via.placeholder.com/400"
          }
          alt={book.volumeInfo.title}
        />
      </div>
      {/* <div>
        <span>{book.volumeInfo.categories}</span>
        <p>
          {book.searchInfo
            ? book.searchInfo.textSnippet
            : "Text Snippet Not available"}
        </p>
      </div> */}
    </div>
  );
};

export default BookCard;
