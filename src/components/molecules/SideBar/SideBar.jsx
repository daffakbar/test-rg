import React, { Component } from "react";
import "./index.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="card container">
        <div className=" d-flex justify-content-between ">
          <span>Rating 4 ke atas</span>
          <input type="checkbox" name="" id="" className="align-self-center" />
        </div>
        <div className="d-flex justify-content-between">
          <span>Stock Tersedia</span>
          <input type="checkbox" name="" id="" className="align-self-center" />
        </div>
      </div>
    );
  }
}

export default SideBar;
