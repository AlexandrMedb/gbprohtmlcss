import React from "react";
// влючить в зависимости
// import {NavLink, useHistory} from 'react-router-dom'
import "./navBar.scss";
import delImg from "./delImg.svg";

export const Navbar = () => {
  return (
    <section className="navBar">
      <div className="container navBar_container">
        <div className="navBar_left">
          <div className="navButton">
            <a href="/">
              <img src="img/logo.svg" alt="logo" />
            </a>
          </div>

          <div className="navButton">
            <a href="/catalog">
              <img src="img/loop.svg" alt="loop" />
            </a>
          </div>
        </div>

        <ul className="navBar_right">
          <li>
            <details className="navMenu">
              <summary>
                <img src="img/menu.svg" alt="menu" />
              </summary>
              <div className="data">
                <div className="navMenu_header">
                  <h2>MENU</h2>
                  <button>
                    <img src={delImg} alt="" />
                  </button>
                </div>
                <h3>MAN</h3>
                <ul>
                  <li>
                    <a href="">Accessories</a>
                  </li>
                  <li>
                    <a href="">Bags</a>
                  </li>
                  <li>
                    <a href="">Denim</a>
                  </li>
                  <li>
                    <a href="">T-Shirts</a>
                  </li>
                </ul>

                <h3>WOMAN</h3>
                <ul>
                  <li>
                    <a href="">Accessories</a>
                  </li>
                  <li>
                    <a href="">Jackets & Coats</a>
                  </li>
                  <li>
                    <a href="">Polos</a>
                  </li>
                  <li>
                    <a href="">T-Shirts</a>
                  </li>
                  <li>
                    <a href="">Shirts</a>
                  </li>
                </ul>

                <h3>KIDS</h3>
                <ul>
                  <li>
                    <a href="">Accessories</a>
                  </li>
                  <li>
                    <a href="">Jackets & Coats</a>
                  </li>
                  <li>
                    <a href="">Polos</a>
                  </li>
                  <li>
                    <a href="">T-Shirts</a>
                  </li>
                  <li>
                    <a href="">Shirts</a>
                  </li>
                  <li>
                    <a href="">Bags</a>
                  </li>
                </ul>
              </div>
            </details>
          </li>
          <li>
            <a href="/registration">
              <img src="img/profile.svg" alt="profile" />
            </a>
          </li>
          <li>
            <a href="/cart">
              <img src="img/cart.svg" alt="cart" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
