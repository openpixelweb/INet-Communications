    
import React, { useEffect, useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Solution-Oriented Approach",
    description:
      "We focus on understanding security requirements and identifying technologies suited to practical applications.",
  },
  {
    number: "02",
    title: "Wide Product Coverage",
    description:
      "Explore CCTV cameras, DVR and NVR systems, access control products, networking equipment, and accessories.",
  },
  {
    number: "03",
    title: "Industry Understanding",
    description:
      "Security product options for offices, manufacturing facilities, retail spaces, institutions, and residential properties.",
  },
  {
    number: "04",
    title: "Customer-Focused Guidance",
    description:
      "Clear product information and practical guidance to help customers make informed security decisions.",
  },
];

const WhyChooseAbout = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(
      ".inet-about-why-reveal"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
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
        threshold: 0.08,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-about-why-section"
      id="why-inet"
      ref={sectionRef}
      aria-labelledby="inet-about-why-heading"
    >
      <div className="container">
        <div className="inet-about-why-layout">

          {/* LEFT SIDE */}
          <div className="inet-about-why-left inet-about-why-reveal">

            <div className="inet-about-why-eyebrow">
              <span></span>
              WHY INET COMMUNICATIONS
            </div>

            <h2 id="inet-about-why-heading">
              More Than
              <br />
              Security Products.
              <span>
                A Focus on the Right Solutions.
              </span>
            </h2>

            <p className="inet-about-why-intro">
              Choosing security technology is about more than
              specifications. It is about finding suitable
              products, understanding your environment, and
              making informed decisions.
            </p>

            <div className="inet-about-why-commitment">
              <span className="inet-about-why-commitment-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2 21 6v6c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V6l9-4Z" />
                  <path d="m8 12 3 3 5-6" />
                </svg>
              </span>

              <div>
                <strong>Our Commitment</strong>
                <p>
                  Supporting better security decisions
                  through dependable technology and
                  practical product guidance.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="inet-about-why-right">
            {reasons.map((item, index) => (
              <article
                key={item.number}
                className="inet-about-why-item inet-about-why-reveal"
                style={{
                  "--why-delay": `${index * 90}ms`,
                }}
              >
                <span className="inet-about-why-number">
                  {item.number}
                </span>

                <div className="inet-about-why-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span
                  className="inet-about-why-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </article>
            ))}
          </div>

        </div>
      </div>

      <div
        className="inet-about-why-decoration"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default WhyChooseAbout;
