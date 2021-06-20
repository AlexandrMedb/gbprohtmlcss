import React from "react";
import "./catalogPage.scss";

import { Features } from "../../components/features/Features";
import { ProductCard } from "../../components/productCard/ProductCard";
import productCard from "./productCard.png";
import plaginationPlug from "./PP.png";
export const CatalogPage = () => {
  return (
    <div>
      <div className="Breadcrumb">
        <div className="Breadcrumb_container container">
          <div className="Breadcrumb_left">NEW ARRIVALS</div>
          <div className="Breadcrumb_right">
            HOME / MEN / <span>NEW ARRIVALS</span>
          </div>
        </div>
      </div>
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
      <div className="PP container">
        <img src={plaginationPlug} alt="dad" />
      </div>

      <Features />
    </div>
  );
};
