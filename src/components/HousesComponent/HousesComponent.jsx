import React from "react";
import { useState } from "react";
import Houses from "./Houses/Houses";
import './HousesComponent.css';

function HousesComponent() {
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="container-items">
    <Houses
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />
    </div>
  )
}

export default HousesComponent

