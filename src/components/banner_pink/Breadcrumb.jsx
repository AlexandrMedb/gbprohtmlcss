import React from "react";
import "./Breadcrumb.scss";

export class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="BannerPink_container">
        <div className="Breadcrumb">
          <div className="Breadcrumb_container container">
            <div className="Breadcrumb_left">{this.props.h1}</div>
            <div className="Breadcrumb_right">
              HOME / MEN / <span>{this.props.h1}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
