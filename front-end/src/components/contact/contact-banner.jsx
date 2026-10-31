
import React from "react";

import contactBannerImg from "../../../public/assets/img/contact/contact-banner.jpg";

const ContactBanner = () => {
  return (
    <section
      className="inet-about-banner"
      aria-labelledby="inet-contact-banner-title"
    >
      {/* BANNER BACKGROUND IMAGE */}
      <div className="inet-about-banner-bg">
        <img
          src={contactBannerImg.src}
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
            id="inet-contact-banner-title"
            className="inet-about-banner-title"
          >
            Contact Us
          </h1>

          <p className="inet-about-banner-tagline">
            Let's Connect for Smarter Security Solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
