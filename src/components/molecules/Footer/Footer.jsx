import React, { Component } from "react";
import "./index.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
          <div className="">
            <a class="navbar-brand" href="/#">
              <i class="bi bi-instagram"></i>
            </a>
            <a class="navbar-brand ms-3" href="/#">
              <i class="bi bi-facebook"></i>
            </a>
            <a class="navbar-brand ms-3" href="/#">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
          <div className=" text-white-50">
            <span>Terms & Condition </span> |{" "}
            <span>
              Copyright © 2018. All rights reserved. PT Radya Gita Bahagi
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
