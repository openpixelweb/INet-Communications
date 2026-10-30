
import React, { useEffect, useRef } from "react";

const values = [
  {
    number: "01",
    icon: "shield",
    title: "Quality First",
    description:
      "A focus on dependable security products and technologies suited to practical applications.",
  },
  {
    number: "02",
    icon: "handshake",
    title: "Customer Commitment",
    description:
      "Understanding customer requirements and helping them choose suitable security solutions.",
  },
  {
    number: "03",
    icon: "innovation",
    title: "Continuous Innovation",
    description:
      "Keeping pace with evolving CCTV, surveillance, access control, and networking technologies.",
  },
  {
    number: "04",
    icon: "check",
    title: "Trust & Reliability",
    description:
      "Building lasting customer relationships through clear communication and responsible service.",
  },
];

const ValueIcon = ({ name }) => {
  const icons = {
    shield: (
      <>
        <path d="M12 2 21 6v6c0 5-3.5 8.5-9 10-5.5-1.5-9-5-9-10V6l9-4Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    handshake: (
      <>
        <path d="m2 12 4-4 4 2 3-2 4 1 5 5-4 5-3-1-3 2-4-2-3-2-3-4Z" />
        <path d="m9 14 3 2M12 12l4 4M6 8l3-3h4l3 3" />
      </>
    ),
    innovation: (
      <>
        <path d="M9 18h6M10 22h4M9 14c-1.4-1-2-2.5-2-4a5 5 0 0 1 10 0c0 1.5-.6 3-2 4-.8.6-1 1.4-1 2h-4c0-.6-.2-1.4-1-2Z" />
        <path d="M12 1v2M4 5l2 2M20 5l-2 2M2 12h2M20 12h2" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  };

  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
};

const CoreValues = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(
      ".inet-values-reveal"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
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
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-values-section"
      id="core-values"
      ref={sectionRef}
      aria-labelledby="inet-values-title"
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="inet-values-header inet-values-reveal">
          <div className="inet-values-eyebrow">
            <span className="inet-values-eyebrow-line"></span>
            WHAT WE BELIEVE IN
          </div>

          <h2
            id="inet-values-title"
            className="inet-values-title"
          >
            Our Values.
            <span> Your Confidence.</span>
          </h2>

          <p>
            Our approach to security technology is guided
            by quality, reliability, innovation, and a
            commitment to understanding customer needs.
          </p>
        </div>

        {/* FOUR VALUE CARDS */}
        <div className="inet-values-grid">
          {values.map((item, index) => (
            <article
              key={item.number}
              className="inet-values-card inet-values-reveal"
              style={{
                "--values-delay": `${index * 100}ms`,
              }}
            >
              <div className="inet-values-card-top">
                <span className="inet-values-icon">
                  <ValueIcon name={item.icon} />
                </span>

                <span className="inet-values-number">
                  {item.number}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span
                className="inet-values-card-line"
                aria-hidden="true"
              ></span>
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="inet-values-bottom inet-values-reveal">
          <span className="inet-values-bottom-line"></span>

          <p>
            Committed to dependable technology and
            customer-focused security solutions.
          </p>

          <span className="inet-values-bottom-line"></span>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
