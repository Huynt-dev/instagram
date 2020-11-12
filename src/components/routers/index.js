import React from "react";
import "../../styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../contents";
import { HomeLogin } from "../login";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Routers() {
  return (
    <Router>
      <Route path="/login" exact component={HomeLogin} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}
