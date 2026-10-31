
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const benefits = [
  {
    number: "01",
    icon: "shield",
    title: "Reliable Products",
    description:
      "Quality CCTV and security equipment for consistent performance.",
  },
  {
    number: "02",
    icon: "cpu",
    title: "Modern Technology",
    description:
      "Advanced surveillance and networking products for evolving security needs.",
  },
  {
    number: "03",
    icon: "sliders",
    title: "Tailored Solutions",
    description:
      "Security recommendations based on your environment and requirements.",
  },
  {
    number: "04",
    icon: "layers",
    title: "Complete Product Range",
    description:
      "Cameras, recording systems, networking equipment and essential accessories.",
  },
  {
    number: "05",
    icon: "building",
    title: "Industry Expertise",
    description:
      "Security technologies for commercial, industrial and institutional environments.",
  },
  {
    number: "06",
    icon: "headset",
    title: "Customer-Centric Approach",
    description:
      "Practical product guidance and assistance in choosing suitable solutions.",
  },
];

const iconPaths = {
  shield: (
    <>
      <path d="M12 2 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  cpu: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4" />
    </>
  ),
  sliders: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
      <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 10 6-10 6L2 8l10-6Z" />
      <path d="m2 12 10 6 10-6M2 16l10 6 10-6" />
    </>
  ),
  building: (
    <>
      <rect x="3" y="8" width="8" height="13" />
      <rect x="11" y="3" width="10" height="18" />
      <path d="M6 12h2m-2 4h2m8-9h2m-2 4h2m-2 4h2M1 21h22" />
    </>
  ),
  headset: (
    <>
      <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
      <rect x="2" y="13" width="5" height="7" rx="2" />
      <rect x="17" y="13" width="5" height="7" rx="2" />
      <path d="M19 20c0 2-2 2-5 2h-2" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="3" width="16" height="7" rx="2" />
      <rect x="4" y="14" width="16" height="7" rx="2" />
      <path d="M8 6h.01M8 17h.01M12 10v4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
};

const WhyIcon = ({ name, size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {iconPaths[name] || iconPaths.shield}
  </svg>
);

const WhyChooseArea = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".inet-why-reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
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

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-why-section"
      id="why-choose-us"
      ref={sectionRef}
    >
      <div className="container-fluid inet-why-container">

        <div className="inet-why-main">

          {/* LEFT: COMPANY MESSAGE */}
          <div className="inet-why-intro">
            <div className="inet-why-eyebrow inet-why-reveal">
              <span />
              WHY CHOOSE INET COMMUNICATIONS
            </div>

            <h2 className="inet-why-heading inet-why-reveal">
              Built for Security.
              <span>Driven by Your Needs.</span>
            </h2>

            <p className="inet-why-description inet-why-reveal">
              We combine reliable products, industry knowledge
              and practical guidance to help you build safer,
              smarter and better-connected environments.
            </p>

            <div className="inet-why-values inet-why-reveal">
              <div>
                <strong>01</strong>
                <span>Quality Products</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Tailored Solutions</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Practical Guidance</span>
              </div>
            </div>

            <Link href="#" className="inet-why-primary-btn">
              Discover Our Approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* CENTER: SECURITY VISUAL */}
          <div className="inet-why-visual inet-why-reveal">
            <div className="inet-why-orbit orbit-one" />
            <div className="inet-why-orbit orbit-two" />
            <div className="inet-why-orbit orbit-three" />

            <div className="inet-why-central-image">
              <img
                src="/assets/img/security-shield.png"
                alt="Security shield with CCTV surveillance camera and commercial building"
                loading="lazy"
              />
            </div>

            <div className="inet-why-floating-icon floating-one">
              <WhyIcon name="shield" />
            </div>

            <div className="inet-why-floating-icon floating-two">
              <WhyIcon name="settings" />
            </div>

            <div className="inet-why-floating-icon floating-three">
              <WhyIcon name="server" />
            </div>

            <div className="inet-why-floating-icon floating-four">
              <WhyIcon name="building" />
            </div>

            <div className="inet-why-floating-icon floating-five">
              <WhyIcon name="headset" />
            </div>
          </div>

          {/* RIGHT: SIX BENEFITS */}
          <div className="inet-why-benefits">
            {benefits.map((item, index) => (
              <div
                className="inet-why-benefit inet-why-reveal"
                key={item.number}
                style={{
                  "--why-delay": `${(index % 2) * 100}ms`,
                }}
              >
                <div className="inet-why-benefit-icon">
                  <WhyIcon name={item.icon} />
                </div>

                <div className="inet-why-benefit-content">
                  <span className="inet-why-benefit-number">
                    {item.number}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span
                  className="inet-why-benefit-decoration"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM COMMITMENT BANNER */}
        <div className="inet-why-commitment inet-why-reveal">
          <div className="inet-why-commitment-intro">
            <span className="inet-why-commitment-label">
              OUR COMMITMENT
            </span>

            <h3>
              Your Security Goals.
              <span> Our Focus.</span>
            </h3>

            <p>
              From product selection to solution planning,
              we're here to support your next surveillance
              and security infrastructure project.
            </p>
          </div>

          <div className="inet-why-commitment-values">
            <div>
              <WhyIcon name="shield" size={27} />
              <span>Quality Focused</span>
            </div>
            <div>
              <WhyIcon name="headset" size={27} />
              <span>Customer Oriented</span>
            </div>
            <div>
              <WhyIcon name="settings" size={27} />
              <span>Solution Driven</span>
            </div>
          </div>

          <Link href="#" className="inet-why-contact-btn">
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseArea;
