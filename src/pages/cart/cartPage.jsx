import React from "react";
import "./cartPage.scss";
import { Breadcrumb } from "../../components/banner_pink/Breadcrumb";

export class CartPage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb h1="SHOPPING CART" />
        <main>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, quis?
        </main>
      </div>
    );
  }
}
