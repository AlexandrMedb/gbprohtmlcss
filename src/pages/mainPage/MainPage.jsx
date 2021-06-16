import React from "react";
// влючить в зависимости
// import {NavLink, useHistory} from 'react-router-dom'
import { Navbar } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";
import "./mainPage.css";
import men from "./man.png";

export const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div>
          <img className="banner_img" src={men} alt="" />
        </div>
        {/* <div className="banner_right"> */}
        <div className="rectangle"></div>
        <div className="banner_titile">
          <span className="banner_titile__bold">THE BRAND</span>
          <br />
          <span className="banner_usual">OF LUXERIOUS</span>{" "}
          <span className="banner_titile__pink">FASHION</span>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};
