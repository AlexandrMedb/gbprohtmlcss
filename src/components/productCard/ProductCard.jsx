import React from "react";

import "./ProductCard.scss";

export class ProductCard extends React.Component {
  render() {
    return (
      <div className="productCard">
        <img src={this.props.img} alt="image" />
        <div className="product_data">
          <div className="productCard_header">{this.props.header}</div>
          <div className="productCard_text">{this.props.text}</div>
          <div className="productCard_price">{this.props.price}</div>
        </div>
      </div>
    );
  }
}
