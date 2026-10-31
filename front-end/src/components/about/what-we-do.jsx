
import React, { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    id: "01",
    title: "CCTV & IP Surveillance",
    short: "Indoor and outdoor security cameras",
    description:
      "Explore CCTV and IP camera technologies for monitoring entrances, workplaces, commercial facilities, and residential environments.",
    features: [
      "Indoor & Outdoor Cameras",
      "IP Surveillance",
      "HD Video Monitoring",
    ],
    icon: "camera",
  },
  {
    id: "02",
    title: "Video Recording & Monitoring",
    short: "Reliable recording and monitoring systems",
    description:
      "Discover DVR, NVR, and connected monitoring technologies designed for video recording, playback, and surveillance management.",
    features: [
      "DVR & NVR Systems",
      "Video Playback",
      "Remote Monitoring",
    ],
    icon: "monitor",
  },
  {
    id: "03",
    title: "Access Control & Entry Systems",
    short: "Modern entry management technologies",
    description:
      "Find access control and video door phone systems suited to managing entry points in offices, apartment communities, and other facilities.",
    features: [
      "Access Control",
      "Video Door Phones",
      "Entry Management",
    ],
    icon: "lock",
  },
  {
    id: "04",
    title: "Security Networking & Accessories",
    short: "Supporting infrastructure for surveillance",
    description:
      "Explore networking equipment and security accessories that help connect cameras, recorders, and monitoring systems.",
    features: [
      "Network Infrastructure",
      "Connectivity Products",
      "Security Accessories",
    ],
    icon: "network",
  },
];

// SVG icons - no external package required
const CapabilityIcon = ({ name, size = 24 }) => {
  const icons = {
    camera: (
      <>
        <rect x="3" y="7" width="13" height="10" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
    monitor: (
      <>
        <rect x="2" y="3" width="20" height="15" rx="2" />
        <path d="M8 22h8M12 18v4" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v3" />
      </>
    ),
    network: (
      <>
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M12 8v4M5 16v-4h14v4" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] || icons.camera}
    </svg>
  );
};

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const active = capabilities[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".inet-do-reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
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
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-do-section"
      id="what-we-do"
      ref={sectionRef}
      aria-label="What We Do - Security Capabilities"
    >
      <div className="container">
        <div className="inet-do-layout">

          {/* LEFT - FOUR INTERACTIVE OPTIONS */}
          <div className="inet-do-list inet-do-reveal">
            {capabilities.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`inet-do-item ${
                  activeIndex === index ? "is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
              >
                <span className="inet-do-item-number">
                  {item.id}
                </span>

                <span className="inet-do-item-icon">
                  <CapabilityIcon name={item.icon} />
                </span>

                <span className="inet-do-item-text">
                  <strong>{item.title}</strong>
                  <small>{item.short}</small>
                </span>

                <span
                  className="inet-do-item-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT - ORIGINAL DARK DETAIL PANEL */}
          <div className="inet-do-panel inet-do-reveal">
            <div
              className="inet-do-panel-decoration"
              aria-hidden="true"
            ></div>

            <div className="inet-do-panel-top">
              <span>OUR CAPABILITIES</span>
              <span>{active.id} / 04</span>
            </div>

            <div
              className="inet-do-panel-detail"
              key={active.id}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="inet-do-panel-icon">
                <CapabilityIcon
                  name={active.icon}
                  size={36}
                />
              </div>

              <h3>{active.title}</h3>

              <p>{active.description}</p>

              <div className="inet-do-panel-features">
                {active.features.map((feature) => (
                  <span key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="inet-do-panel-bottom">
              <span className="inet-do-panel-bottom-line"></span>
              PRACTICAL SECURITY TECHNOLOGIES
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
