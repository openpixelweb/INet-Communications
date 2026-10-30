
import Link from "next/link";
import React from "react";

const highlights = [
  {
    id: 1,
    number: "01",
    title: "Quality Security Products",
    description:
      "Reliable surveillance equipment for demanding environments.",
  },
  {
    id: 2,
    number: "02",
    title: "Modern Surveillance Technology",
    description:
      "Smarter CCTV, monitoring, and connectivity solutions.",
  },
  {
    id: 3,
    number: "03",
    title: "Industry-Focused Solutions",
    description:
      "Security solutions suited to different business needs.",
  },
];

const AboutArea = () => {
  return (
    <section className="inet-about-section">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT SIDE - SECURITY VISUAL */}
          <div className="col-xl-6 col-lg-6">
            <div className="inet-about-visual">

              <div className="inet-about-image-wrap">
                <img
                  src="/assets/img/about/ab-large.jpg"
                  alt="CCTV surveillance and security installation"
                  className="inet-about-main-img"
                />

                {/* CCTV Viewfinder Corners */}
                <span className="inet-corner top-left"></span>
                <span className="inet-corner top-right"></span>
                <span className="inet-corner bottom-left"></span>
                <span className="inet-corner bottom-right"></span>

                <div className="inet-monitor-label">
                  <span className="inet-live-dot"></span>
                  SECURITY MONITORING
                </div>

                <div className="inet-viewfinder-cross">+</div>
              </div>

              {/* Floating card */}
              <div className="inet-about-floating-card">
                <div className="inet-floating-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>

                <div>
                  <h4>Complete Security</h4>
                  <p>Surveillance • Networking • Access</p>
                </div>
              </div>

              <div className="inet-about-image-caption">
                SMART SECURITY / RELIABLE TECHNOLOGY
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - ABOUT CONTENT */}
          <div className="col-xl-6 col-lg-6">
            <div className="inet-about-content">

              <div className="inet-about-eyebrow">
                <span></span>
                ABOUT INET COMMUNICATIONS
              </div>

              <h2 className="inet-about-heading">
                Security That Sees More.
                <span> Protection You Can Trust.</span>
              </h2>

              <p className="inet-about-description">
                At iNet Communications, we provide advanced CCTV,
                surveillance, and security technology solutions
                designed to safeguard people, property, and
                business environments.
              </p>

              <p className="inet-about-description secondary">
                From surveillance cameras and recording systems
                to networking products and security accessories,
                we bring together dependable technology and
                practical solutions for different industries.
              </p>

              <div className="inet-about-highlights">
                {highlights.map((item) => (
                  <div
                    key={item.id}
                    className="inet-about-highlight"
                  >
                    <div className="inet-highlight-number">
                      {item.number}
                    </div>

                    <div className="inet-highlight-text">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inet-about-button"
              >
                Discover More About Us
                <span>↗</span>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutArea;
