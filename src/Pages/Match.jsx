import React from "react";
import "./Match.scss";

import { useState } from "react";

//importation images
import womanreading from "../assets/images/Matchimages/womanreading.png";
import searchIcon from "../assets/images/Matchimages/search.svg";
import closeIcon from "../assets/images/Matchimages/close.svg";
import matchIcon from "../assets/images/Matchimages/match.svg";
//importation composant
import BookCard from "../Components/BookCard";

//importation npm

const Match = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [nextBook, setNextBook] = useState(0);
  const [matchmessage, setMatchmessage] = useState("");
  const [close, setClose] = useState(false);

  //functions

  const handleRight = () => {
    setNextBook(nextBook + 1);
  };

  const handleLeft = () => {
    setMatchmessage("MATCH");
  };

  const handleSearch = (keywords) => {
    setNextBook(0);
    setMatchmessage("");
    setsearchTerm(keywords);
  };

  const handleSearchAI = () => {
    searchBookAIs(searchTerm);
  };

  const handleCloseClick = () => {
    setClose(true);
    setsearchTerm("");
  };

  // SEARCHING BOOK WITH OPEN AI
  const searchBookAIs = async (keywords) => {
    const response = await fetch(
      `https://booktwin-3ec23f381e74.herokuapp.com?word=${keywords}`
      // {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     keywords: `${keywords}`,
      //   }),
      // }
    );

    const data = await response.json();

    // console.log(data);

    // const newData = data.choices[0].text.substring(
    //   data.choices[0].text.lastIndexOf('"') + 1
    // );

    //console.log(newData);
    searchBooks(data);
  };

  //SEARCHING BOOK WITH GOOGLE API

  const searchBooks = async (titleword) => {
    const response = await fetch(
      `https://booktwin-3ec23f381e74.herokuapp.com?word=${titleword}`
      // {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     titleword: `${titleword}`,
      //   }),
      // }
    );
    const data = await response.json();

    setBooks(data);
    if (data) setClose(false);
    // console.log(data);
  };

  return (
    <div className="match-container">
      <div className="avatar">
        <img src={womanreading} alt="a woman reading" />
      </div>

      <div className="search">
        <h1>Trouves-moi le livre parfait</h1>
        <div className="search-input">
          <img
            className="magnifying-glass"
            src={searchIcon}
            alt="search icon - magnifying glass"
            onClick={handleSearchAI}
          />
          <input
            type="text"
            className="text"
            placeholder="Entrer des mots clés"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {searchTerm.length !== 0 && (
            <img
              className="close-icon"
              src={closeIcon}
              alt="cross icon to close"
              onClick={handleCloseClick}
            />
          )}
        </div>
      </div>

      <div className="book-show">
        <button className="btn" onClick={handleLeft}>
          YES
        </button>
        {books.items?.length > 0 ? (
          <div className="bookCards-container">
            {books.items.map(
              (book, index) =>
                close === false &&
                index === nextBook && <BookCard key={index} book={book} />
            )}
          </div>
        ) : (
          <div className="empty">
            {books.items?.length === 0 && (
              <h2>Pas de livre trouvé avec ce terme</h2>
            )}
          </div>
        )}

        <button className="btn" onClick={handleRight}>
          NO
        </button>
      </div>
      <br />

      {close === false && matchmessage !== "" && (
        <img
          className="match-message"
          src={matchIcon}
          alt="pink spice with message it's a match"
        />
      )}
    </div>
  );
};

export default Match;
