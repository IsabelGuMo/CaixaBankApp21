import React from "react";
import DataApi from "./data";
import { Link } from "react-router-dom";

const Houses = () => {
  const responseData = DataApi();
  return responseData
    .sort((a, b) => b.active - a.active)
    .slice(0, 10)
    .map((item) => (
        <div className="item" key={item.id}>
          <figure>
            <img src={"http://localhost:8080/images/" + item.image[0].name} alt={item.nameproperty} />
          </figure>
          <div className="info-price">
            <h5>
              <p className="price">{item.price} € </p>
            </h5>
          </div>
          <div className="info-product">
            <h5 className="city-product">{item.city}</h5>
            <h2 className="name-product">{item.nameproperty}</h2>
            <h6>
              {item.bathroom} | {item.bedroom} | {item.surface}
            </h6>
            <h6 className="description">{item.description}</h6>
            <button as={Link} to="detailPage">Ver ficha</button>
          </div>
        </div>
    ));
};

export default Houses;
