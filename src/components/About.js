import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../assets/img/1.jpg";

function About() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <div className="row justify-content-around">
        <div className="col-md-4">
          <img className="responsive" src={img1} alt="img1" />
        </div>
        <div className="col-md-7 ">
          <h1>About us</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <Button
            style={{
              backgroundColor: "#FF9F66",
              border: "none",
              borderRadius: "20px",
            }}
          >
            Join our community
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
