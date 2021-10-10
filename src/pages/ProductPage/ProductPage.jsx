import React, { Component } from "react";
import axios from "axios";
import {
  CardProduct,
  Header,
  SideBar,
  InputDropdown,
  Footer,
} from "../../components";
import "./index.scss";

class ProductPage extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    axios
      .get(`https://recruitment.dev.rollingglory.com/api/v2/gifts`)
      .then((res) => {
        const product = res.data.data;
        console.log(product);
        this.setState({ product });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-3">
              <p className="title">Filter</p>
              <hr />
              <div className="">
                <SideBar />
              </div>
            </div>
            <div class="col-9 ">
              <div className="mb-3 border-bottom border-1">
                <div className=" d-flex justify-content-between">
                  <p className="title">Product List</p>
                  <div className="">
                    <span>Urutkan</span>
                    {/* <Dropdown /> */}
                    <InputDropdown />
                  </div>
                </div>
                {/* <hr /> */}
              </div>
              <div className=" row">
                {this.state.product.map((item) => (
                  <div className="mb-3 col-4">
                    <CardProduct
                      title={item.name}
                      points={item.attributes.points}
                      review={item.attributes.numOfReviews}
                      images={item.attributes.images}
                      stock={item.attributes.stock}
                      rating={item.attributes.rating}
                      newProduct={item.attributes.isNew}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
