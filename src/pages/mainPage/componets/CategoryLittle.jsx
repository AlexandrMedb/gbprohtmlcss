import React from "react";

import "./CategoryLittle.scss";

export class CategoryLyttle extends React.Component {
  render() {
    return (
      <div
        className="category_little"
        style={{ backgroundImage: `url(${this.props.img})` }}
      >
        <div className="category_title"> {this.props.title}</div>
        <div className="category_header">{this.props.header}</div>
      </div>
    );
  }
}
