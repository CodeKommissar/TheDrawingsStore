import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./Product.css";

const Product = (props) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.imagePath} alt={props.title} />
          </figure>
        </div>
      </div>
      <div className="card-content">
        <div className="has-text-centered">
          <div class="columns">
            <div class="column">
              <p className="product_title">"{props.title}"</p>
            </div>
            <div class="column">
              <StripeCheckout
                  name="The Drawings Store"
                  description={`Pay $${props.price} for "${props.title}"`}
                  amount={props.price * 100}
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
              >
                  <a class="button is-success">Purchase for ${props.price}</a>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
