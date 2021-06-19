import React from "react";

import "./Feature.scss";

export class Feature extends React.Component {
  render() {
    return (
      <div className="feature_data">
        <img src={this.props.img} alt="" />
        <div className="feature_title">Free Delivery</div>
        <div className="feature_text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </div>
      </div>
    );
  }
}
