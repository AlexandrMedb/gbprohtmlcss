import React from "react";
import "./banner_pink.scss";

export class BannerPink extends React.Component {
  render() {
    return (
      <div className="BannerPink_container">
        <div className="container">{this.props.h1}</div>
      </div>
    );
  }
}
