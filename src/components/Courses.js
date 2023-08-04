import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";
import img1 from "../assets/img/1.jpg";

function Courses() {
  const data = [];
  for (let i = 0; i < 8; i++) {
    data.push(
      <div
        className="col-md-3"
        style={{
          padding: "10px",
        }}
      >
        <Card className="box-shadow" style={{ borderRadius: "10px" }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Price $250</Card.Title>
            <Card.Text>
              UI/UX Design | How to design with professional
            </Card.Text>
            <hr />5 star 32 Review
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "5%",
        paddingBottom: "5%",
        backgroundColor: "#F5F6F9",
      }}
    >
      <h2 style={{ marginBottom: "3%" }}>Most Popular Fields</h2>
      <div className="container">
        <div className="row">{data}</div>
      </div>
      <Button
        style={{
          width: "150px",
          backgroundColor: "#FF9F66",
          border: "none",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        View All
      </Button>
    </div>
  );
}

export default Courses;
