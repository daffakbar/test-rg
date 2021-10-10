import React, { Component } from "react";
// import { LogoProduct } from "../../../assets";
import { LogoProduct } from "../../../assets";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={LogoProduct} alt="Logo" />
      </div>
    );
  }
}

export default Header;
