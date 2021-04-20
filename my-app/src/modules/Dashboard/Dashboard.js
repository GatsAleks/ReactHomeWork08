import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashContainer">
      <h1>Dashboard</h1>
      <Link to="/users" className="dashLink">
        Users
      </Link>
      <Link to="/albums" className="dashLink">
        Albums
      </Link>
    </div>
  );
}
