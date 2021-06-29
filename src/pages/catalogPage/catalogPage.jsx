import React from "react";
import "./catalogPage.scss";

import { ReactComponent as Filtermenu } from "./filterMenu.svg";

import { Features } from "../../components/features/Features";
import { ProductCard } from "../../components/productCard/ProductCard";
import { Breadcrumb } from "../../components/banner_pink/Breadcrumb";
import productCard from "./productCard.png";
import plaginationPlug from "./PP.png";
export const CatalogPage = () => {
  return (
    <main>
      <Breadcrumb h1="NEW ARRIVALS" />
      <section className="container">
        <div className="filter_wrap">
          <details className="filter_left">
            <summary className="filter_menu">
              <span className="filter_menu_text">FILTER</span>
              <Filtermenu />
            </summary>
            <div className="filter_category_wrap">
              <details className="filter_category">
                <summary>CATEGORY</summary>
                <a href="">Accessories</a>
                <a href="">Bags</a>
                <a href="">Denim</a>
              </details>

              <details className="filter_category">
                <summary>BRAND</summary>
                <a href="">Nike</a>
                <a href="">Adidas</a>
                <a href="">Reebok</a>
              </details>
            </div>
          </details>

          <div className="filter_right">
            <details className="">
              <summary>TRENDING NOW</summary>
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
              <summary>SIZE</summary>
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
              <summary>PRICE</summary>
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

        <div className="products  ">
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
        <div className="PP ">
          <img src={plaginationPlug} alt="plug" />
        </div>
      </section>
      <Features />
    </main>
  );
};
