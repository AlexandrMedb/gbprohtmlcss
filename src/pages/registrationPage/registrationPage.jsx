import React from "react";
import "./registrationPage.scss";
import { Breadcrumb } from "../../components/banner_pink/Breadcrumb";

export const RegistrationPage = () => {
  return (
    <div>
      <Breadcrumb h1="REGISTRATION" />
      <div className="registration_container container">
        <form action="">
          <div className="registrationform">
            <div className="registrationForm_title">Your Name</div>
            <input
              className="registrationForm_input"
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
            />
            <input
              className="registrationForm_input"
              type="text"
              name="lastName"
              id=""
              placeholder="Last Name"
            />
          </div>
          <div className="registrationform_radio">
            <div>
              <label htmlFor="">
                <input type="radio" name="sex" />
                Male
              </label>
            </div>

            <div>
              <label htmlFor="">
                <input type="radio" name="sex" /> Female
              </label>
            </div>
          </div>

          <div className="registrationform">
            <div className="registrationForm_title">Login details</div>

            <input
              className="registrationForm_input"
              type="email"
              name="firstName"
              id=""
              placeholder="Email"
            />

            <input
              className="registrationForm_input"
              type="password"
              name="Password"
              id=""
              placeholder="Password"
            />
          </div>
        </form>
        <div className="lolatyPerks">
          <div className="lolatyPerks_title  lolatyPerks-text">
            LOYALTY HAS ITS PERKS
          </div>
          <div className="lolatyPerks_title lolatyPerks-text">
            Get in on the loyalty program where you can earn points and unlock
            serious perks. Starting with these as soon as you join:
          </div>
          <ul className="lolatyPerks_perks">
            <li className="lolatyPerks-text">15% off welcome offer</li>
            <li className="lolatyPerks-text">
              Free shipping, returns and exchanges on all orders
            </li>
            <li className="lolatyPerks-text">
              $10 off a purchase on your birthday
            </li>
            <li className="lolatyPerks-text">Early access to products</li>
            <li className="lolatyPerks-text">Exclusive offers & rewards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
