
import React from "react";

import caseStudyBannerImg from "../../../public/assets/img/case-study/case-study-banner.jpg";

const CaseStudyBanner = () => {
  return (
    <section
      className="inet-about-banner"
      aria-labelledby="inet-case-study-banner-title"
    >
      {/* BANNER BACKGROUND IMAGE */}
      <div className="inet-about-banner-bg">
        <img
          src={caseStudyBannerImg.src}
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
            id="inet-case-study-banner-title"
            className="inet-about-banner-title"
          >
            Case Studies
          </h1>

          <p className="inet-about-banner-tagline">
            Real Applications. Smarter Security Solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBanner;
