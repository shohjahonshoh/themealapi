import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://images-apilist-fun.sfo2.cdn.digitaloceanspaces.com/the_meal_db_api.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="navbar-links">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          API
        </a>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for a Meal..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
