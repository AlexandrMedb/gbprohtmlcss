import React from "react";
import "./productPage.scss";

import { ProductCard } from "../../components/productCard/ProductCard";
import productCard from "./productCard.png";
import { ReactComponent as ButtonArrow } from "./buttonArrow.svg";
import cart from "./cart.png";

import productPlug from "./productPlug.png";

export class ProductPage extends React.Component {
  render() {
    return (
      <main>
        <section className="sliderPlug">
          <button className="left">
            <ButtonArrow />
          </button>
          <img src={productPlug} alt="girl" />
          <button className="right">
            <ButtonArrow />
          </button>
        </section>
        <section className="container productData_wrap">
          <section className="productData">
            <h2>WOMEN COLLECTION</h2>
            <div className="pinkRectangel"></div>
            <h1>MOSCHINO CHEAP AND CHIC</h1>
            <p>
              Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures
              before cutting-edge services. Completely visualize parallel core
              competencies rather than exceptional portals.
            </p>
            <p className="productPrice">$561</p>

            <div className=" filter_wrap">
              <div className="filter_right filter_wrap__Product">
                <details className="">
                  <summary>CHOOSE COLOR</summary>
                  <div className="details_wrap">
                    <div className="filter_item">
                      <input type="checkbox" id="checkYes" />
                      <label htmlFor="checkYes">Yes</label>
                    </div>
                    <div>
                      <input type="checkbox" id="checkNo" />
                      <label htmlFor="checkNo">No</label>
                    </div>
                  </div>
                </details>
                <details className="">
                  <summary>CHOOSE SIZE</summary>
                  <div className="details_wrap ">
                    <div className="filter_item">
                      <input type="checkbox" id="checkXs" />
                      <label htmlFor="checkXs">Xs</label>
                    </div>
                    <div>
                      <input type="checkbox" id="checkS" />
                      <label htmlFor="checkS">S</label>
                    </div>
                    <div>
                      <input type="checkbox" id="checkM" />
                      <label htmlFor="checkM">M</label>
                    </div>
                    <div>
                      <input type="checkbox" id="checkL" />
                      <label htmlFor="checL">L</label>
                    </div>
                  </div>
                </details>
                <details className="">
                  <summary>QUANTITY</summary>
                  <div className="details_wrap">
                    <div className="filter_item">
                      <input type="checkbox" id="checkLow" />
                      <label htmlFor="checkLow">Low</label>
                    </div>
                    <div>
                      <input type="checkbox" id="checkMiddle" />
                      <label htmlFor="checkMiddle">Mid</label>
                    </div>
                    <div>
                      <input type="checkbox" id="checkExp" />
                      <label htmlFor="checkExp">Exp</label>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <button>
              <img src={cart} alt="cart" /> <span> Add to Cart</span>
            </button>
          </section>
        </section>
        <div className="products container ">
          <ProductCard
            img={productCard}
            header="ELLERY X M'O CAPSULE"
            text="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
            price="$52.00"
          />
          <ProductCard
            img={productCard}
            header="ELLERY X M'O CAPSULE"
            text="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
            price="$52.00"
          />
          <ProductCard
            img={productCard}
            header="ELLERY X M'O CAPSULE"
            text="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
            price="$52.00"
          />
        </div>
      </main>
    );
  }
}
