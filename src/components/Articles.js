import React from "react";
import "./style.css";
import img1 from "../assets/img/1.jpg";
import { Button } from "react-bootstrap";

function Articles() {
  const data = [];

  for (let i = 0; i < 2; i++) {
    data.push(
      <div className="container">
        <div
          style={{
            marginBottom: "5%",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div className="col-md-8">
              <h4 className="theme">#MARKETING</h4>
              <h1>
                Organic marketing and modern marketing, What's the Relation?
              </h1>
            </div>
            <div className="col-md-4">
              <img height={200} width={300} src={img1} alt="img1" />
            </div>
            <div>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              <br />
              <br />
              XYZ | Marketing Manager
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#F5F6F9",
        paddingBottom: "5%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Articles</h1>
        <h2 style={{ marginBottom: "3%" }}>
          <span className="theme">Blogs</span> |{" "}
          <span style={{ color: "gray" }}>News Articles</span>
        </h2>
      </div>
      <div>{data}</div>
      <div style={{ textAlign: "center" }}>
        <Button
          style={{
            width: "150px",
            backgroundColor: "#FF9F66",
            border: "none",
          }}
        >
          View All
        </Button>
      </div>
    </div>
  );
}

export default Articles;
