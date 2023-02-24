import React from "react";
import "./iconComponent.css";
import pool from "./imgPool.png";

const IconComponent = () => {
  return (  
    <div className="container d-flex flex-column justify-content-center align-items-center">
    
      <div className="col">
        <div className="row-12 d-flex flex-row">
          <div className="">
          </div>
          <div className="col">
            <div className="row-6">
              <img src={pool} className="imgDetail" alt="imgage pool" />
              <div className="row-12 d-flex flex-row">
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
        <div className="d-flex justify-content-around w-50 mt-5">
          <i class="fa-solid fa-toilet"></i>
          <i class="fa-regular fa-square"></i>
          <i class="fa-solid fa-chart-area"></i>
          <p>275.000€</p>
        </div>
      </div>
  );
};

export default IconComponent;
