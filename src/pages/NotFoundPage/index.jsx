import React from "react";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";

export default function NotFoundPage(props) {
  return (
    <div className="not-found-page">
      <h1>404 NotFound</h1>
      <div>
        <p>Sorry, we couldn't find this page. Please try again!</p>
      </div>
      <Button type="primary" size="large">
        <Link to="/home">Home</Link>
      </Button>
    </div>
  );
}
