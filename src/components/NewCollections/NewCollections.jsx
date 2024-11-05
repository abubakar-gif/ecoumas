import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Items from "../items/Items";

export default function NewCollections() {
  return (
    <div className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Items key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
