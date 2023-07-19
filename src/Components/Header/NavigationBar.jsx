import React from "react";
// import searchIcon from "../../assets/images/Matchimages/search.svg";
import "./NavigationBar.scss";
const NavigationBar = () => {
  return (
    <div className="nav-container">
      <div id="leTitre">
        <h1>
          CREA<span className="gold">LIT</span>ECH
        </h1>
      </div>
      {/* <div className="search-box" id="searchBox">
        <input name="Rech" placeholder="Recherche..." type="text" />

        <img src={searchIcon} alt="Icone Rechercher" />
      </div> */}
      <nav>
        <ul>
          <li>
            <h1 className="lit-fit-title">The Perfect LITerary Fit</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
