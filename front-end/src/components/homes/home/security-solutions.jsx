
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const solutions = [
  {
    id: "01",
    title: "CCTV Surveillance Solutions",
    description:
      "Complete indoor and outdoor surveillance solutions for every environment.",
    image: "/assets/img/cctv.jpg",
    icon: "camera",
    link: "#",
  },
  {
    id: "02",
    title: "Smart Video Monitoring",
    description:
      "High-definition monitoring with intelligent detection capabilities.",
    image: "/assets/img/monitoring.jpg",
    icon: "monitor",
    link: "#",
  },
  {
    id: "03",
    title: "Remote Surveillance Solutions",
    description:
      "Secure remote viewing and connected monitoring capabilities.",
    image: "/assets/img/remote.jpg",
    icon: "cloud",
    link: "#",
  },
  {
    id: "04",
    title: "Access & Entry Management",
    description:
      "Modern access control systems for secure and efficient entry.",
    image: "/assets/img/access.jpg",
    icon: "lock",
    link: "#",
  },
];

// SVG Icons
const SecurityIcon = ({ name, size = 23 }) => {
  const paths = {
    camera: (
      <>
        <rect x="3" y="7" width="13" height="10" rx="2" />
        <path d="m16 10 5-3v10l-5-3M6 21h8M10 17v4" />
      </>
    ),
    monitor: (
      <>
        <rect x="2" y="3" width="20" height="15" rx="2" />
        <path d="M8 22h8M12 18v4" />
      </>
    ),
    cloud: (
      <path d="M6 18h12a4 4 0 0 0 0-8 6 6 0 0 0-11.5-1.5A5 5 0 0 0 6 18Z" />
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 9 4v6c0 5-3.6 8.5-9 10-5.4-1.5-9-5-9-10V6l9-4Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M7 17l-2 2M19 5l-2 2" />
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
      {paths[name] || paths.shield}
    </svg>
  );
};

const strengths = [
  {
    icon: "shield",
    title: "Reliable Technology",
    text: "Quality-driven security equipment",
  },
  {
    icon: "settings",
    title: "Tailored Solutions",
    text: "Designed around your requirements",
  },
  {
    icon: "headset",
    title: "Product Guidance",
    text: "Support in choosing the right systems",
  },
];

const SecuritySolutions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(
      ".inet-sol-reveal"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
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
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-solutions-section"
      id="security-solutions"
      ref={sectionRef}
    >
      {/* TOP SHOWCASE */}
      <div className="inet-solutions-showcase">
        <div className="inet-solutions-photo">
          <img
            src="/assets/img/control-room.jpg"
            alt="Security surveillance control room"
            loading="lazy"
          />
        </div>

        <div className="container inet-solutions-container">
          <div className="inet-solutions-copy">

            <div className="inet-sol-eyebrow inet-sol-reveal">
              <span className="inet-sol-eyebrow-line"></span>
              OUR SECURITY SOLUTIONS
            </div>

            <h2 className="inet-sol-title inet-sol-reveal">
              Smarter Solutions for
              <span> a Safer Tomorrow</span>
            </h2>

            <p className="inet-sol-description inet-sol-reveal">
              From intelligent surveillance to integrated
              security infrastructure, iNet Communications
              provides reliable technologies to help protect
              people, assets and business environments.
            </p>

            <div className="inet-sol-strengths">
              {strengths.map((item, index) => (
                <div
                  key={item.title}
                  className="inet-sol-strength inet-sol-reveal"
                  style={{
                    "--sol-delay": `${index * 100}ms`,
                  }}
                >
                  <div className="inet-sol-strength-icon">
                    <SecurityIcon name={item.icon} />
                  </div>

                  <div className="inet-sol-strength-text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="inet-sol-actions inet-sol-reveal">
              <Link
                href="#"
                className="inet-sol-primary-btn"
              >
                Explore All Solutions
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#"
                className="inet-sol-text-link"
              >
                Discuss Your Requirements
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* FOUR SECURITY SOLUTION CARDS */}
      <div className="inet-solutions-catalogue">
        <div className="container inet-sol-cards-container">
          <div className="inet-sol-cards-grid inet-sol-four-grid">

            {solutions.map((item, index) => (
              <div
                key={item.id}
                className="inet-sol-reveal inet-sol-card-reveal"
                style={{
                  "--sol-delay": `${index * 80}ms`,
                }}
              >
                <div className="inet-sol-card">

                  <div className="inet-sol-card-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="inet-sol-card-icon">
                    <SecurityIcon
                      name={item.icon}
                      size={24}
                    />
                  </div>

                  <div className="inet-sol-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;
