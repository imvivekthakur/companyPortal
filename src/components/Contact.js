import React from "react";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        textAlign: "center",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <h1>Contact US</h1>
      Upskill for a better future
      <h1>Request More Information</h1>
      <Button
        style={{
          width: "150px",
          backgroundColor: "#FF9F66",
          border: "none",
          borderRadius: "20px",
        }}
      >
        Contact US
      </Button>
    </div>
  );
}

export default Contact;
