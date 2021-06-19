import React from "react";
import "./footer.scss";

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
                <img src="img/faceBookLogo.svg" alt="pinrest" />
              </a>
            </li>
            <li className="socialMedia_logo">
              <a href="">
                <img src="img/instagramLogo.svg" alt="pinrest" />
              </a>
            </li>
            <li className="socialMedia_logo">
              <a href="">
                <img src="img/pinrestLogo.svg" alt="pinrest" />
              </a>
            </li>
            <li className="socialMedia_logo">
              <a href="">
                <img src="img/twitterLogo.svg" alt="pinrest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
