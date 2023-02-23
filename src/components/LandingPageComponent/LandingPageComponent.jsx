import React from "react";
import SearchAtom from "../../atoms/SearchAtom/SearchAtom";
import "../../styles/Styles.css";
import "./LandingPageComponent.css";

const LandingPageComponent = () => {
  return (
    <div className="background">
      <SearchAtom/>
    </div>
  );
};

export default LandingPageComponent;
