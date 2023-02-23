import React from "react";
import "../../styles/Styles.css";

const SearchComponent = () => {
  return (
    <div className="d-flex justify-content-center p-5">
      <div className="input-group mb-3 w-75 ">
        <div className="input-wrapper">
          <input
            value={""}
            onChange={""}
            type="text"
            className="search form-control input"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="input-icon"
            fill="grey"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
