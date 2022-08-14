import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <section className="card">
        <img src={props.imageUrl} />
        <div className="card-img-content">
          <div className="card-location-name">
            <i className="fa-solid fa-location-dot"></i>
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <p className="card-date">
            {props.startDate}-{props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </section>
      <hr></hr>
    </>
  );
}

export default Card;
