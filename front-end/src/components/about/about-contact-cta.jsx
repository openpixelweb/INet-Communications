
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const AboutContactCta = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(
      ".inet-about-cta-reveal"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-about-cta-section"
      id="about-contact"
      ref={sectionRef}
      aria-labelledby="inet-about-cta-title"
    >
      <div className="container">
        <div className="inet-about-cta-panel inet-about-cta-reveal">

          {/* DECORATIVE ELEMENTS */}
          <div
            className="inet-about-cta-circle inet-about-cta-circle-one"
            aria-hidden="true"
          ></div>

          <div
            className="inet-about-cta-circle inet-about-cta-circle-two"
            aria-hidden="true"
          ></div>

          {/* CONTENT */}
          <div className="inet-about-cta-content">
            <div className="inet-about-cta-eyebrow">
              <span className="inet-about-cta-line"></span>
              LET'S CONNECT
            </div>

            <h2 id="inet-about-cta-title">
              Let's Find the Right
              <span> Security Solution for You.</span>
            </h2>

            <p>
              Whether you're exploring CCTV cameras,
              surveillance systems, or access control
              technologies, we're here to help you
              take the next step.
            </p>

            <div className="inet-about-cta-actions">
              <Link
                href="/#contact-us"
                className="inet-about-cta-primary"
              >
                Get in Touch
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/#our-products"
                className="inet-about-cta-secondary"
              >
                Explore Our Products
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT DECORATION */}
          <div
            className="inet-about-cta-graphic"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 240 240"
              width="240"
              height="240"
              fill="none"
            >
              <circle
                cx="120"
                cy="120"
                r="104"
                stroke="currentColor"
                strokeOpacity=".22"
              />
              <circle
                cx="120"
                cy="120"
                r="78"
                stroke="currentColor"
                strokeOpacity=".32"
              />
              <circle
                cx="120"
                cy="120"
                r="52"
                stroke="currentColor"
                strokeOpacity=".2"
              />
              <path
                d="M120 65 165 84v38c0 33-20 52-45 61-25-9-45-28-45-61V84l45-19Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="m101 122 14 14 26-30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutContactCta;
