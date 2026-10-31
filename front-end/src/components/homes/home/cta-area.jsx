
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const ContactCtaArea = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = section.querySelectorAll(
      ".inet-cta-reveal"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="inet-contact-cta-section" ref={sectionRef}>
      <div className="container">
        <div className="inet-contact-cta-wrapper">

          <div className="inet-contact-cta-decoration"></div>

          <div className="inet-contact-cta-content inet-cta-reveal">
            <span className="inet-contact-cta-label">
              <span className="inet-cta-label-dot"></span>
              LET'S BUILD A SAFER TOMORROW
            </span>

            <h2>
              Your Security Matters.
              <span> Let's Find the Right Solution.</span>
            </h2>

            <p>
              Looking for CCTV cameras, access control systems,
              networking products, or complete surveillance
              solutions? Connect with iNet Communications
              to discuss your security requirements.
            </p>

            <div className="inet-contact-cta-buttons">
              <Link
                href="#"
                className="inet-contact-cta-primary"
              >
                Request a Quote
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="#"
                className="inet-contact-cta-secondary"
              >
                Contact Our Team
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="inet-contact-cta-features inet-cta-reveal">
            <div className="inet-cta-feature">
              <span className="inet-cta-feature-icon">
                ✓
              </span>
              Reliable Products
            </div>

            <div className="inet-cta-feature">
              <span className="inet-cta-feature-icon">
                ✓
              </span>
              Product Guidance
            </div>

            <div className="inet-cta-feature">
              <span className="inet-cta-feature-icon">
                ✓
              </span>
              Industry Solutions
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCtaArea;
