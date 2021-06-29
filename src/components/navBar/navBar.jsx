import React from "react";
// влючить в зависимости
// import {NavLink, useHistory} from 'react-router-dom'
import "./navBar.css";

export const Navbar = () => {
  return (
    <div className="navBar">
      <div className="container navBar_container">
        <div className="navBar_left">
          <diva className="navButton">
            <a href="/">
              <img src="img/logo.svg" alt="logo" />
            </a>
          </diva>

          <div className="navButton">
            <a href="/catalog">
              <img src="img/loop.svg" alt="loop" />
            </a>
          </div>

          {/* <input type="text" /> */}
        </div>

        <ul className="navBar_right">
          {/* <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li> */}
          <li>
            <a href="/catalog">
              <img src="img/menu.svg" alt="menu" />
            </a>
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
    </div>
  );
};
