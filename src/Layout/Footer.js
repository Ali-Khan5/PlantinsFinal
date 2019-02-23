import React from "react";
import FBicon from "./../media/fbsvg.svg";
import Twittericon from "./../media/twittersvg.svg";
import Instaicon from "./../media/insta.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="footerShadow"
      style={{ backgroundColor: "#29302d", padding: "10px", color: "#FFFFFF" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link  footerNavLink" to="/">
                  Showtimes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footerNavLink"  to="/news">
                  News 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footerNavLink" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footerNavLink" to="/contact">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footerNavLink " to="/">
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link footerNavLink" to="/">
                  <img src={FBicon} style={{width:'40px',height:'40px'}} />
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link footerNavLink" to="/">
                <img src={Twittericon} style={{width:'40px',height:'40px'}} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footerNavLink" to="/">
                <img src={Instaicon} style={{width:'40px',height:'40px'}} />
                </Link>
              </li>
            </ul>
          </div>
          {/* Copyright © Fried Plantains 2018. All rights reserved. */}
          <div className="col-md-12">
            <ul className="nav justify-content-center">
            <li className="nav-item">
            Copyright © Fried Plantains 2018. All rights reserved.
            </li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
