
import React, { useEffect, useRef } from "react";

const solutions = [
  {
    id: "cctv-surveillance",
    title: "CCTV Surveillance Solutions",
    description:
      "Complete indoor and outdoor surveillance solutions for every environment.",
    image: "/assets/img/solutions/cctv-surveillance.jpg",
  },
  {
    id: "smart-monitoring",
    title: "Smart Video Monitoring",
    description:
      "High-definition monitoring with intelligent detection capabilities.",
    image: "/assets/img/solutions/smart-monitoring.jpg",
  },
  {
    id: "remote-surveillance",
    title: "Remote Surveillance Solutions",
    description:
      "Secure remote viewing and connected monitoring capabilities.",
    image: "/assets/img/solutions/remote-surveillance.jpg",
  },
  {
    id: "access-management",
    title: "Access & Entry Management",
    description:
      "Modern access control systems for secure and efficient entry.",
    image: "/assets/img/solutions/access-management.jpg",
  },
  {
    id: "security-networking",
    title: "Security Networking Infrastructure",
    description:
      "Reliable network connectivity supporting modern security systems.",
    image: "/assets/img/solutions/security-networking.jpg",
  },
  {
    id: "integrated-security",
    title: "Integrated Security Solutions",
    description:
      "Connected security technologies designed to work together seamlessly.",
    image: "/assets/img/solutions/integrated-security.jpg",
  },
];

const SolutionsArea = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".inet-ss-reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      items.forEach((item) => item.classList.add("is-visible"));
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
        rootMargin: "0px 0px -20px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="inet-ss-section"
      aria-labelledby="inet-ss-heading"
    >
      <div className="container">

        {/* SECTION HEADING */}
        <div className="inet-ss-heading inet-ss-reveal">
          <span className="inet-ss-subtitle">
            OUR SECURITY SOLUTIONS
          </span>

          <h2 id="inet-ss-heading">
            Smarter Solutions for a{" "}
            <span>Safer Tomorrow.</span>
          </h2>

          <p>
            From intelligent surveillance to integrated
            security infrastructure, iNet Communications
            provides reliable technologies to help protect
            people, assets and business environments.
          </p>
        </div>

        {/* SOLUTIONS IMAGE GALLERY */}
        <div className="inet-ss-grid">
          {solutions.map((solution, index) => (
            <article
              id={solution.id}
              key={solution.id}
              className="inet-ss-item inet-ss-reveal"
              style={{
                "--inet-ss-delay": `${(index % 3) * 90}ms`,
              }}
              aria-labelledby={`inet-ss-title-${solution.id}`}
            >
              {/* BACKGROUND IMAGE */}
              <div className="inet-ss-image">
                <img
                  src={solution.image}
                  alt={solution.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* TRANSPARENT OVERLAY */}
              <div
                className="inet-ss-overlay"
                aria-hidden="true"
              />

              {/* IMAGE CONTENT */}
              <div className="inet-ss-content">
                <span className="inet-ss-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 id={`inet-ss-title-${solution.id}`}>
                  {solution.title}
                </h3>

                <p>{solution.description}</p>

                <span
                  className="inet-ss-line"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsArea;
