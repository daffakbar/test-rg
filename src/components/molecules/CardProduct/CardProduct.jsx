import React from "react";
import { Hp, Poin, Star } from "../../../assets";
import "./index.scss";

const CekStock = ({ stock }) => {
  if (stock < 5) {
    return (
      <div>
        <span className="red-stock fw-bold">Stock {"<"} 5</span>
      </div>
    );
  } else if (stock === 0) {
    return (
      <div>
        <span className="red-stock fw-bold">Sold Out</span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="in-stock fw-bold">In Stock</span>
      </div>
    );
  }
};
const TagIcon = ({ newProduct, rating, review }) => {
  if (newProduct === 1) {
    return (
      <div>
        <div className="tag-icon tag-new">{/* <p>asdsadas</p> */}</div>
        <span className="tag-title">New</span>
      </div>
    );
  } else if (newProduct === 0 && rating >= 4 && review > 25) {
    return (
      <div>
        <div className="tag-icon tag-best">{/* <p>asdsadas</p> */}</div>
        <span className="tag-title">Best</span>
      </div>
    );
  } else if (newProduct === 1 && rating >= 4 && review > 25) {
    return (
      <div>
        <div className="tag-icon tag-hot">{/* <p>asdsadas</p> */}</div>
        <span className="tag-title">Hot</span>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const CardProduct = ({
  title,
  points,
  review,
  images,
  stock,
  newProduct,
  rating,
}) => {
  return (
    <div class="card container">
      <CekStock stock={stock} />
      <TagIcon newProduct={newProduct} rating={rating} review={review} />
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
              <span className="review-text ms-1">{review} reviews</span>
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
