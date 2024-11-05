import React, { useState } from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Items from "../items/Items";

export default function Popular() {
  
  return (
    <div className="Popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return <Items key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
