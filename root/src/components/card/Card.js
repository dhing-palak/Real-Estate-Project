import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Card.scss";

const Card = ({ icon, heading, title, location }) => {
  return (
    <>
      <Link to={location}>
        <div className="card-container">
          <div className="card-icon">{icon}</div>
          <div className="card-title">{heading}</div>
          <div className="card-text">{title}</div>
          <div className="card-viewmore">View More</div>
        </div>
      </Link>
    </>
  );
};

export default Card;
