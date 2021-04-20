import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>This page is not found</h1>
      <p>
        Please return to <Link to="/">homepage</Link>
      </p>
    </div>
  );
}
