
import React from "react";

import industriesBannerImg from "../../../public/assets/img/industries/industries-banner.jpg";

const IndustriesBanner = () => {
  return (
    <section
      className="inet-about-banner"
      aria-labelledby="inet-industries-banner-title"
    >
      {/* BANNER BACKGROUND IMAGE */}
      <div className="inet-about-banner-bg">
        <img
          src={industriesBannerImg.src}
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
            id="inet-industries-banner-title"
            className="inet-about-banner-title"
          >
            Industries We Serve
          </h1>

          <p className="inet-about-banner-tagline">
            Smart Security for Every Industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesBanner;
