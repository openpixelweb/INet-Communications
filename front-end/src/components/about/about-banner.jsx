
import React from "react";

import aboutBannerImg from "../../../public/assets/img/about/ab-slider.jpg";

const AboutBanner = () => {
  return (
    <section
      className="inet-about-banner"
      aria-labelledby="inet-about-banner-title"
    >
      {/* BANNER BACKGROUND IMAGE */}
      <div className="inet-about-banner-bg">
        <img
          src={aboutBannerImg.src}
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
            id="inet-about-banner-title"
            className="inet-about-banner-title"
          >
            About Us
          </h1>

          <p className="inet-about-banner-tagline">
            Connecting Technology with Smarter Security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
