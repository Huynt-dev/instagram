import React from "react";
import "./css/contentLeft.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardFooter,
  CardSubtitle,
  Nav
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPaperPlane,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

export default function ItemContentLeft(props) {
  return (
    <Card className="mb-4">
      <CardHeader className="content-left-top text-muted">
        <img
          className="avatar-left"
          alt="ok"
          src="../images/instagram-logo-1.png"
        />
        <p className="title">{props.userPost}</p>
      </CardHeader>
      <CardImg top width="100%" src={props.image} alt="image" />
      <CardBody>
        <Nav className="menu-right">
          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faHeart} />
          </Link>

          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faComment} />
          </Link>

          <Link className="nav-link" to="/">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </Nav>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {props.like} lượt thích
        </CardSubtitle>
        <CardText>{props.content}</CardText>
      </CardBody>
      <CardFooter className="content-left-bottom text-muted">
        <input
          className="form-control"
          type="text"
          placeholder="Bình Luận"
          aria-label="text"
        />
        <a href="#">Đăng</a>
      </CardFooter>
    </Card>
  );
}
