import React, { Component } from "react";
import "./index.scss";

class InputDropdown extends Component {
  render() {
    return (
      <select name="sort" id="sort">
        <option value="Terbaru">Terbaru</option>
        <option value="Terlaris">Terlaris</option>
      </select>
    );
  }
}

export default InputDropdown;
