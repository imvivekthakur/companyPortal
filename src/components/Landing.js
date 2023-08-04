import React from "react";
import img1 from "../assets/img/1.jpg";
import { Button } from "react-bootstrap";
import "./style.css";

function Landing() {
  return (
    <div className="container" style={{ marginTop: "2%" }}>
      <div className="row">
        <div
          className="col-md-6"
          style={{ display: "flex", alignContent: "center", flexWrap: "wrap" }}
        >
          <h2>
            Connecting Talents, Empowering Innovations
          </h2>
          <p>
            Welcome to our recruitment startup portal, where we bridge the gap
            between exceptional talents and visionary companies. Whether you are
            a software engineer, product manager, data scientist, or any other
            tech professional, we have the perfect platform for you to explore
            exciting career opportunities
            {/* <br />
            <span style={{ fontWeight: 600 }}>FutureBridge</span> is a place where
            people develop their own potential */}
          </p>
          <Button
            style={{
              borderRadius: "100px",
              backgroundColor: "#FF9F66",
              border: "none",
            }}
          >
            Find Jobs
          </Button>
        </div>
        <div
          className="col-md-6"
          style={{ borderRadius: "10px", marginTop: "2%" }}
        >
          <img className="responsive" src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
