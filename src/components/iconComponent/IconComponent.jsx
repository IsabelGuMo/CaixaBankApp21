import React from "react";
import "./iconComponent.css";
import pool from "./imgPool.png";

const IconComponent = () => {
  return (
    <div className="container">
      <div className="col">
        <div className="row-12">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange=""
              />
              <button
                className="btn btn-outline-danger rounded-end-circle"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="col d-flex">
          <div className="row-6">
              <img src={pool} className="imgDetail" alt="imgage pool" />
              <div>
                <img src={pool} className="imgDetailSmall" alt="imgage pool" />
                <img src={pool} className="imgDetailSmall" alt="imgage pool" />
              </div>
            </div>
          </div>
          <div className="row-6 text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              asperiores? Illum enim rerum tenetur perspiciatis autem omnis
              reprehenderit, velit culpa ratione facere. Architecto, ipsum
              sapiente corporis asperiores quidem illum minus! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Harum, asperiores? Illum
              enim rerum tenetur perspiciatis autem omnis reprehenderit, velit
              culpa ratione facere. Architecto, ipsum sapiente corporis
              asperiores quidem illum minus!
            </p>
          </div>
          </div>
        </div>
        <div className="row-3"></div>
      </div>
  );
};

export default IconComponent;
