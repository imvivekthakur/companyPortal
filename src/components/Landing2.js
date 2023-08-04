import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

function Landing2() {
  const data = [
    {
      title: "BROWSE",
      description:
        "Find your perfect jobs among thousands of others. Find your perfect jobs among thousands of others.",
    },
    {
      title: "ANALYSE",
      description:
        "Find your perfect jobs among thousands of others. Find your perfect jobs among thousands of others.",
    },
    {
      title: "UPSKILL",
      description:
        "Find your perfect jobs among thousands of others. Find your perfect jobs among thousands of others.",
    },
  ];

  const cards = data.map((item, i) => {
    return (
      <div
        className="col-md-4"
        style={{
          padding: "10px",
        }}
        key={i}
      >
        <Card className="box-shadow" style={{ borderRadius: "20px" }}>
          <Card.Body style={{ height: "200px" }}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
      <h2 style={{ marginTop: "5%", marginBottom: "5%" }}>
        How <span className="theme">FutureBridge</span> helps you choose the best jobs
      </h2>
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </div>
  );
}

export default Landing2;
