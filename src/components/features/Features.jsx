import React from "react";
import "./Features.scss";
import { Feature } from "./Feature";
import car from "./car.svg";

export class Features extends React.Component {
  render() {
    return (
      <div className="feature">
        <div className="feature_container container">
          <Feature img={car} />
          <Feature img={car} />
          <Feature img={car} />
        </div>
      </div>
    );
  }
}
