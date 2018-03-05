import React, { Component } from "react";
import axios from "axios";
import { RingLoader } from 'react-spinners';
import ProductsRow from "./ProductsRow/ProductsRow";
import { chunk } from "../../utils/utils";
import "./Products.css";

const API = "/api/products";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get(API)
      .then(res => {
        this.setState({ products: res.data });
      });
  }

  renderProductsRow() {
    if (this.state.products.length !== 0) {
      const chunkedArray = chunk(this.state.products, 3);
      return chunkedArray.map((products, index) => {
        return <ProductsRow products={products} key={index} />
      })
    } else {
      return (
        <div className='center-content'>
          <RingLoader
            color={'black'}
            loading={true}
            size={500}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="container has-text-centered">
          <br />
          <h1 className="selection_title">
            Our Selection
          </h1>
        </div>
        <br />
        {this.renderProductsRow()}
      </div>
    );
  }
}

export default Products;
