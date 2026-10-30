
import React, { useEffect, useRef } from "react";

// ==========================================
// FEATURE CONTENT
// ==========================================

const highlights = [
  {
    id: 1,
    icon: "shield",
    title: "Reliable Products",
    description:
      "Quality-focused CCTV and security equipment for dependable applications.",
  },
  {
    id: 2,
    icon: "camera",
    title: "Practical Solutions",
    description:
      "Surveillance and access control options suited to different business environments.",
  },
  {
    id: 3,
    icon: "headset",
    title: "Customer Guidance",
    description:
      "Helping customers choose suitable products and configurations for their specific security needs.",
  },
];

// ==========================================
// SVG ICONS - NO PACKAGE REQUIRED
// ==========================================

const FeatureIcon = ({ name }) => {
  const icons = {
    shield: (
      <>
        <path d="M12 2 21 6v6c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V6l9-4Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),

    camera: (
      <>
        <path d="M3 8h13v9H3z" />
        <path d="m16 10 5-3v11l-5-3" />
        <path d="M7 20h8M11 17v3" />
      </>
    ),

    headset: (
      <>
        <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
        <rect x="2" y="13" width="5" height="7" rx="2" />
        <rect x="17" y="13" width="5" height="7" rx="2" />
        <path d="M19 20c0 2-2 2-5 2" />
      </>
    ),
  };

  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] || icons.shield}
    </svg>
  );
};

// ==========================================
// WHO WE ARE COMPONENT
// ==========================================

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      ".inet-who-reveal"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

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
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-who-section"
      id="who-we-are"
      ref={sectionRef}
      aria-labelledby="inet-who-title"
    >
      <div className="container">
        <div className="inet-who-layout">

          {/* LEFT IMAGE - UNCHANGED */}
          <div className="inet-who-visual inet-who-reveal">

            <div className="inet-who-image">
              <img
                src="/assets/img/about/who-we-are.jpg"
                alt="CCTV surveillance camera at a modern commercial property"
                loading="lazy"
              />
            </div>

            <div
              className="inet-who-visual-accent"
              aria-hidden="true"
            >
              <span className="inet-who-accent-line"></span>
              SECURITY TECHNOLOGY
              <span className="inet-who-accent-line"></span>
            </div>

            <div
              className="inet-who-image-corner"
              aria-hidden="true"
            ></div>

          </div>

          {/* RIGHT CONTENT - NEW DESIGN */}
          <div className="inet-who-content">

            {/* LABEL */}
            <div className="inet-who-eyebrow inet-who-reveal">
              <span className="inet-who-eyebrow-line"></span>
              WHO WE ARE
            </div>

            {/* HEADING */}
            <h2
              id="inet-who-title"
              className="inet-who-heading inet-who-reveal"
            >
              Your Trusted Partner in
              <span> Security Technology</span>
            </h2>

            {/* INTRODUCTION */}
            <p className="inet-who-lead inet-who-reveal">
              At <strong>iNet Communications</strong>, we
              provide CCTV surveillance, access control,
              video monitoring, and security networking
              products for commercial, industrial,
              institutional, and residential applications.
            </p>

            <p className="inet-who-description inet-who-reveal">
              We focus on understanding each customer's
              requirements and helping them select
              dependable, practical security technologies
              that support safer, more secure environments.
            </p>

            {/* THREE FEATURE ROWS */}
            <div className="inet-who-highlights">
              {highlights.map((item, index) => (
                <div
                  key={item.id}
                  className="inet-who-highlight inet-who-reveal"
                  style={{
                    "--who-delay": `${index * 80}ms`,
                  }}
                >
                  {/* ICON */}
                  <div className="inet-who-highlight-icon">
                    <FeatureIcon name={item.icon} />
                  </div>

                  {/* CONTENT */}
                  <div className="inet-who-highlight-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
