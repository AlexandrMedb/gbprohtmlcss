import React from "react";
// влючить в зависимости
// import {NavLink, useHistory} from 'react-router-dom'
import "./mainPage.scss";

import { CategoryLyttle } from "./componets/CategoryLittle";
import { ProductCard } from "../../components/productCard/ProductCard";
import { Features } from "../../components/features/Features";

//вынести картинки в отдельный файл
import womanImg from "./img/offerWoman.png";
import manImg from "./img/offerMan.png";
import KidsmanImg from "./img/offerKids.png";

//картинки для карточек
import productCard from "./img/productCard.png";

//картинки для фич
// import car from "./img/car.svg";

export const MainPage = () => {
  return (
    <main>
      {/* <div className="task_1 taskDiv"></div>
      <div className="task_2 taskDiv"></div>
      <div className="task_3 taskDiv"></div>
      <div className="task_4 taskDiv"></div>
      <div className="task_5 taskDiv"></div>
      <div className="task_6 taskDiv"></div>
      <div className="task_7 taskDiv"></div> */}

      <section className="banner_background">
        <div className="container banner_container">
          <div className="banner">
            <h1 className="banner_titile__bold">THE BRAND</h1>
            <p>
              <span className="banner_titile">OF LUXERIOUS</span>{" "}
              <span className="banner_titile__pink">FASHION</span>
            </p>
          </div>
        </div>
      </section>
      <section className="offer container">
        <div className="category_top">
          <CategoryLyttle title="30% OFF" header="FOR WOMEN" img={womanImg} />
          <CategoryLyttle title="HOT DEAL" header="FOR MEN" img={manImg} />
          <CategoryLyttle
            title="NEW ARRIVALS"
            header="FOR KIDS"
            img={KidsmanImg}
          />
        </div>
        <div className="category_big">
          <div className="category_title"> LUXIROUS & TRENDY</div>
          <div className="category_header">ACCESORIES</div>
        </div>
      </section>
      <section className="container">
        <div className="feturedItems ">
          <div className="feturedItems_title">Fetured Items</div>

          <div className="feturedItems_text ">
            Shop for items based on what we featured in this week
          </div>
        </div>
        <div className="products ">
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
        <div className="products_link">
          <a href="">Browse All Product</a>
        </div>
      </section>
      <Features />
    </main>
  );
};
