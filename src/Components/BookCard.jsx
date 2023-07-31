import React from "react";

const BookCard = ({ book, more }) => {
  return (
    <div className="bookCards-container">
      {/* <div>
        <p>{book.publishedDate}</p>
      </div> */}
      <div>
        {more === false && (
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://via.placeholder.com/400"
            }
            alt={book.volumeInfo.title}
          />
        )}
      </div>

      {more === true && (
        <div className="book-more">
          <span>{book.volumeInfo.categories}</span>
          <p>
            {book.searchInfo
              ? book.searchInfo.textSnippet
              : "Text Snippet Not available"}
          </p>
          <p>Book published in {book.volumeInfo.publishedDate}</p>
        </div>
      )}
    </div>
  );
};

export default BookCard;
