import React from "react";

import "./Landing.css";

const Landing = () => {
    return (
      <section className="hero is-medium bg-img">
        <div className="white-overlay">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="landing_title">
                The Drawings Store
              </h1>
              <br />
              <h2 className="landing_subtitle">
                Buy your favorites paintings at the best price!
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Landing;
