
import React from "react";

import productsBannerImg from "../../../public/assets/img/products/products-banner.jpg";

const ProductsBanner = () => {
  return (
    <section
      className="inet-about-banner"
      aria-labelledby="inet-products-banner-title"
    >
      {/* BANNER BACKGROUND IMAGE */}
      <div className="inet-about-banner-bg">
        <img
          src={productsBannerImg.src}
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
            id="inet-products-banner-title"
            className="inet-about-banner-title"
          >
            Our Products
          </h1>

          <p className="inet-about-banner-tagline">
            Reliable Security and Networking Products
            for Every Environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
