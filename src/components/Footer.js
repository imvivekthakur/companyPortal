import React from "react";
import "./style.css";
import icon from "../assets/img/jobs_icon.png";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        paddingBottom: "5%",
        paddingTop: "5%",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-2">
            <img
              className="responsive"
              src={icon}
              alt="logo"
              style={{ width: "3rem" }}
            />
          </div>
          <div className="col-md-2">
            <p>171 / f-24, Sector-3/ Dwarka, New Delhi - 110058</p>
            <p>(+91)123456789</p>
            <p>contact@vivekthakur</p>
          </div>
          <div className="col-md-2">
            <ul className="alignList">
              <li>About</li>
              <li>Growers</li>
              <li>Merchants</li>
              <li>Partners</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="alignList">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
