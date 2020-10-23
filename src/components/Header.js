import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
        <div className="navbar-header">
          <Link className="navbar-brand text-white text-lg brand text" to="/">
            Movies App
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
