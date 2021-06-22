import React from "react";
import "./catalogPage.scss";
import { ReactComponent as Logo } from "./cart.svg";

import { Features } from "../../components/features/Features";
import { ProductCard } from "../../components/productCard/ProductCard";
import { Breadcrumb } from "../../components/banner_pink/Breadcrumb";
import productCard from "./productCard.png";
import plaginationPlug from "./PP.png";
export const CatalogPage = () => {
  return (
    <div>
      <Breadcrumb h1="NEW ARRIVALS" />
      <div className="filter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo.
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
        <img src={plaginationPlug} alt="pkug" />
      </div>
      <Logo className="svgimg" />

      <Features />
    </div>
  );
};
