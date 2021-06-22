import React from "react";
import "./footer.scss";
import { ReactComponent as FacebookIcon } from "./img/faceBookLogo.svg";
import { ReactComponent as InstagramIcon } from "./img/instagramLogo.svg";
import { ReactComponent as PinrestIcon } from "./img/pinrestLogo.svg";
import { ReactComponent as TwitterIcon } from "./img/twitterLogo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_top ">
        <div className="footerContainer">
          <div className="footer_top__left">
            <img src="img/footerGirl.png" alt="Girl" />
            <p className="footer_top__text">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum“
            </p>
          </div>
          <div className="footer_right">
            <div className="footer_titlebold">SUBSCRIBE</div>
            <div className="footer_title__normal">
              FOR OUR NEWLETTER AND PROMOTION
            </div>

            <form className="footerForm" action="">
              <input type="email" placeholder="Enter Your Email" />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer_botom ">
        <div className="container footer_botomContainer">
          <div className="rights">© 2021 Brand All Rights Reserved.</div>
          <ul className="socialMedia">
            <li className="socialMedia_logo">
              <a href="">
                <FacebookIcon />
              </a>
            </li>
            <li className="socialMedia_logo">
              <a href="">
                <InstagramIcon />
              </a>
            </li>
            <li className="socialMedia_logo">
              <a href="">
                <PinrestIcon />
              </a>
            </li>
            <li className="socialMedia_logo">
              <a href="">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
