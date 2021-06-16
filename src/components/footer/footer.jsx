import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_top ">
        <div className="footerContainer">
          <div className="footer_top__left">
            <img src="img/footerGirl.png" alt="Girl" />
            <p className="footer_top__text">
              {" "}
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum“
            </p>
          </div>
          <div className="footer_right">
            <p className="footer_title">
              <b>SUBSCRIBE</b> <br /> FOR OUR NEWLETTER AND PROMOTION
            </p>
            <label htmlFor="">
              <input type="text" placeholder="Enter Your Email" />
              Subscribe
            </label>
          </div>
        </div>
      </div>

      <div className="footer_botom ">
        <div className="container">
          <div className="rights">© 2021 Brand All Rights Reserved.</div>
          <ul className="socialMedia">
            <li>
              <a href="">
                <img src="img/faceBookLogo.svg" alt="faceBook" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="img/instagramLogo.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="img/pinrestLogo.svg" alt="pinrest" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="img/twitterLogo.svg" alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
