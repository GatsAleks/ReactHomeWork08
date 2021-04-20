import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <Link to="/dashboard" className="headerLink">
        Home
      </Link>

      <Link to="/users" className="headerLink">
        Users
      </Link>

      <Link to="/albums" className="headerLink">
        Albums
      </Link>
    </div>
  );
}
