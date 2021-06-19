import React from "react";
// влючить в зависимости
// import {NavLink, useHistory} from 'react-router-dom'
import "./navBar.css";

export const Navbar = () => {
  return (
    <div className="navBar">
      <div className="container navBar_container">
        <div className="navBar_left">
          <div>
            <img src="img/logo.svg" alt="logo" />
          </div>

          <img src="img/loop.svg" alt="loop" />

          {/* <input type="text" /> */}
        </div>

        <ul className="navBar_right">
          {/* <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li> */}
          <li>
            <a href="/">
              <img src="img/menu.svg" alt="menu" />
            </a>
          </li>
          <li>
            <a href="/contacts">
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
