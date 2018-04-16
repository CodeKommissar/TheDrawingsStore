import React from "react";
import Product from "./Product/Product";

const ProductsRow = (props) => {
  return (
    <div className="container">
      <div className="columns">
        {props.products.map(product => {
          return <Product
                    key={product._id}
                    imagePath={product.imagePath}
                    title={product.title}
                    price={product.price} />
        })}
      </div>
      <br />
    </div>
  );
}

export default ProductsRow;
