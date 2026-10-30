
import React, { useEffect, useRef } from "react";

const visionMissionData = [
  {
    id: "vision",
    label: "OUR VISION",
    title: "A Safer, Smarter Tomorrow.",
    description:
      "To make modern security technologies more accessible, helping businesses, institutions, and communities create safer and better-connected environments.",
    image: "/assets/img/about/vision.jpg",
    icon: "vision",
  },
  {
    id: "mission",
    label: "OUR MISSION",
    title: "Technology That Works for You.",
    description:
      "To provide reliable CCTV surveillance, access control, and networking solutions while helping customers choose suitable products for their specific security needs.",
    image: "/assets/img/about/mission.jpg",
    icon: "mission",
  },
];

// Vision and Mission SVG Icons
const VisionMissionIcon = ({ type }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "vision" ? (
        <>
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <circle cx="11" cy="13" r="8" />
          <circle cx="11" cy="13" r="4.5" />
          <circle cx="11" cy="13" r="1.2" />
          <path d="m11 13 9-9M16 4h4v4" />
        </>
      )}
    </svg>
  );
};

const VisionMission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      ".inet-vm-reveal"
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
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-vm-section"
      id="vision-mission"
      ref={sectionRef}
      aria-label="Our Vision and Mission"
    >
      <div className="container">
        <div className="inet-vm-grid">
          {visionMissionData.map((item, index) => (
            <article
              key={item.id}
              className="inet-vm-card inet-vm-reveal"
              style={{
                "--vm-delay": `${index * 100}ms`,
              }}
            >
              {/* LEFT IMAGE */}
              <div className="inet-vm-image">
                <img
                  src={item.image}
                  alt={
                    item.id === "vision"
                      ? "Modern commercial building"
                      : "CCTV surveillance camera installed at a commercial property"
                  }
                  loading="lazy"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="inet-vm-content">

                {/* BLACK ICON */}
                <div className="inet-vm-icon">
                  <VisionMissionIcon type={item.icon} />
                </div>

                {/* SECTION LABEL */}
                <span className="inet-vm-label">
                  {item.label}
                </span>

                {/* PURPLE DIVIDER */}
                <span
                  className="inet-vm-divider"
                  aria-hidden="true"
                ></span>

                {/* HEADING */}
                <h2>{item.title}</h2>

                {/* DESCRIPTION */}
                <p>{item.description}</p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
