
import React from "react";

import solutionsBannerImg from "../../../public/assets/img/products/products-banner.jpg";

const SolutionsBanner = () => {
  return (
    <section
      className="inet-about-banner"
      aria-labelledby="inet-solutions-banner-title"
    >
      {/* BANNER BACKGROUND IMAGE */}
      <div className="inet-about-banner-bg">
        <img
          src={solutionsBannerImg.src}
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* TRANSPARENT COLOR OVERLAY */}
      <div
        className="inet-about-banner-overlay"
        aria-hidden="true"
      ></div>

      {/* BANNER CONTENT */}
      <div className="container inet-about-banner-container">
        <div className="inet-about-banner-content">
          <h1
            id="inet-solutions-banner-title"
            className="inet-about-banner-title"
          >
            Our Security Solutions
          </h1>

          <p className="inet-about-banner-tagline">
            Smarter Security Solutions for Safer Environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBanner;
