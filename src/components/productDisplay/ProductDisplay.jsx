import React, { useContext } from "react";
import "./productDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { Shopcontext } from "../../context/ShopContext";

export default function ProductDisplay({ product }) {
  const { addToCart } = useContext(Shopcontext);

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productdisplay-img-list">
      
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />

        </div>
      </div>
      <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={product.image} alt="" />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A T-shirt (also spelled tee shirt, or tee for short) is a style of
          fabric shirt named after the T shape of its body and sleeves.
          Traditionally, it has short sleeves and a round neckline, known as a
          crew neck, which lacks a collar.
        </div>
        <div className="produtdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>

          <p className="productdisplay-right-category">
            <span>
              Category : <span>Womens , T-shirt, croptop</span>
            </span>
          </p>
          <p className="productdisplay-right-category">
            <span>
              Tags : <span>modern, latest</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
