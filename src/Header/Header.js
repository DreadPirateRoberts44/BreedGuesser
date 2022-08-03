import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Header.css";

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src="logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Dog's R Us
      </a>
    </nav>
  );
}

export default Header;
