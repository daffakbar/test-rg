import React from "react";
import { Hp, Poin, Star } from "../../../assets";
import "./index.scss";

const CardProduct = ({ title, points, review, images }) => {
  return (
    <div class="card container">
      <span>In Stock</span>
      <img src={images} height="200" class="card-img-top" alt="..." />
      <div class="">
        <div className="">
          <label>{title}</label>
          <div className="d-flex">
            <img src={Poin} alt="" className="align-self-center poin-icon" />
            <span className="poin-text">{points} poins</span>
          </div>
          <div className=" d-flex justify-content-sm-between">
            <div className="">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <span className="review-text">{review} reviews</span>
            </div>
            <button className="btn btn-outline-danger rounded-pill">
              <i class="bi bi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
