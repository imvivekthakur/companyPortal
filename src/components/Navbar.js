import React from "react";
import "./style.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import icon from "../assets/img/jobs_icon.png";

function NavBar() {
  return (
    <div className="container90" style={{ paddingTop: "20px" }}>
      <Navbar expand="lg">
        <Navbar.Brand className="margin-brand" href="#home">
          <img className="responsive" src={icon} alt="logo" 
            style={{width:"3rem"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form style={{ marginRight: "30px" }} className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link className="margin-left-right" href="#DeFi">
              <span>Articles</span>
            </Nav.Link>
            <Nav.Link className="margin-left-right" href="#Blockchain">
              About us
            </Nav.Link>
            <Nav.Link
              className="margin-left-right"
              style={{ marginRight: "20px" }}
              href="#Exchanges"
            >
              Contact us
            </Nav.Link>
            <Button
              style={{
                width: "150px",
                backgroundColor: "#FF9F66",
                border: "none",
              }}
            >
              Find Jobs
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
