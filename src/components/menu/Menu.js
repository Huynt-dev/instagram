import React from "react";
import { Link } from "react-router-dom";
import "./css/Menu.css";
import { Collapse, Navbar, NavbarBrand, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faCompass,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

export default function NavMenu() {
  return (
    <Navbar color="white" light expand="md">
      <div className="container yolo">
        <Link to="/">
          <NavbarBrand>
            <img
              className="logo-2"
              alt="ok"
              src="../images/instagram-logo-1.png"
            />
          </NavbarBrand>
        </Link>
        <Collapse navbar>
          <input
            className="menu-search form-control"
            type="search"
            placeholder="Tìm kiếm"
            aria-label="Search"
          />
        </Collapse>

        <Nav className="menu-box">
          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>

          <Link className="nav-link" to="/blog">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>

          <Link className="nav-link" to="/about-me">
            <FontAwesomeIcon icon={faCompass} />
          </Link>

          <Link className="nav-link" to="/about-me">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link className="nav-link" to="/about-me">
            <img
              className="avatar"
              alt="ok"
              src="../images/instagram-logo-1.png"
            />
          </Link>
        </Nav>
      </div>
    </Navbar>
  );
}
