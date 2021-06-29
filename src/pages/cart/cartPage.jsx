import React from "react";
import "./cartPage.scss";
import { Breadcrumb } from "../../components/banner_pink/Breadcrumb";
import cartCardImg from "./cartCard.png";
import delImg from "./delImg.svg";

export class CartPage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb h1="SHOPPING CART" />
        <main className="cart-wrap container">
          <section className="cart-left">
            <div className="cardCart">
              <img src={cartCardImg} alt="man" />
              <div className="cardCart_data">
                <header>
                  <h2>MANGO PEOPLE T-SHIRT</h2>
                  <button>
                    <img className src={delImg} alt="" />
                  </button>
                </header>

                <p>
                  Price:
                  <span className="cardCart_price"> $300</span>
                </p>
                <p>Color: Red</p>
                <p>Size: Xl </p>
                <div>
                  <span>Quantity: </span>
                  <span className="cardCart_counter">2</span>
                </div>
              </div>
            </div>

            <div className="cardCart">
              <img src={cartCardImg} alt="man" />
              <div className="cardCart_data">
                <header>
                  <h2>MANGO PEOPLE T-SHIRT</h2>
                  <button>
                    <img className src={delImg} alt="" />
                  </button>
                </header>

                <p>
                  Price:
                  <span className="cardCart_price"> $300</span>
                </p>
                <p>Color: Red</p>
                <p>Size: Xl </p>
                <div>
                  <span>Quantity: </span>
                  <span className="cardCart_counter">2</span>
                </div>
              </div>
            </div>

            <div className="cartCad_buttonwraper">
              <button>CLEAR SHOPPING CART</button>
              <button>CONTINUE SHOPPING</button>
            </div>
          </section>
          <section className="cartRight">
            <form className="cartRight_wraper" action="">
              <h2>SHIPPING ADRESS</h2>
              <input type="text" placeholder="Bangladesh" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Postcode / Zip" />
              <button type="submit">GET A QUOTE</button>
            </form>
            <div className="carCheckout cartRight_wraper">
              <p className="carCheckout_SUB">
                SUB TOTAL <span>$900</span>
              </p>
              <p className="carCheckout_GRAND">GRAND TOTAL $900</p>
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
