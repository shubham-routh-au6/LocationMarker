import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="heading">
      <Link to="/">
        <h1 className="headingText">
          <img
            className="imageLogo"
            src="https://img.icons8.com/doodle/48/000000/map-marker.png"
            alt="."
          />
          LOGSen
        </h1>
      </Link>

      <Link to="/login">
        <button className="loginBtn">Sign in</button>
      </Link>
    </div>
  );
}

export default Header;
