import React, { Component } from "react";
import axios from "axios";
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

  render() {
    return (
      <div className="container has-text-centered">
        <br />
        <h1 className="selection_title">
          Our Selection
        </h1>
      </div>
    );
  }
}

export default Products;
