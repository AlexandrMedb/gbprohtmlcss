import React from "react";

import "./ProductCard.scss";
import cart from "./cart.png";

export class ProductCard extends React.Component {
  render() {
    return (
      <div className="productCard">
        <div className="productCard_img">
          <img src={this.props.img} alt="image" />
          <div className="productCard_link">
            <a href="/cart">
              <img src={cart} alt="cart" />
              <span>Add to Cart</span>
            </a>
          </div>
        </div>

        <div className="product_data">
          <div className="productCard_header">
            <a href="product">{this.props.header}</a>
          </div>
          <div className="productCard_text">{this.props.text}</div>
          <div className="productCard_price">{this.props.price}</div>
        </div>
      </div>
    );
  }
}
