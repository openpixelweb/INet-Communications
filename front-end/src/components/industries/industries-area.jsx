
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ==========================================
// INDUSTRIES DATA - HEADER DROPDOWN ORDER
// ==========================================

const industries = [
  // 01 - CORPORATE OFFICES
  {
    id: "corporate-offices",
    name: "Corporate Offices",
    category: "CORPORATE & COMMERCIAL BUILDINGS",
    title: "Smarter Surveillance for Safer Workplaces",
    description:
      "Corporate offices, IT parks, and commercial buildings require dependable surveillance and controlled access to help protect employees, visitors, assets, and sensitive operational areas.",
    image: "/assets/img/industries/corporate-office.jpg",
    capabilities: [
      "IP CCTV and indoor/outdoor monitoring",
      "Biometric and RFID access control",
      "DVR/NVR recording and playback",
      "Remote and centralized monitoring",
      "PoE networking infrastructure",
    ],
    benefits: [
      "Better visibility across workplaces",
      "Controlled entry to restricted zones",
      "Improved incident review",
      "Convenient multi-camera management",
      "Scalable security infrastructure",
    ],
  },

  // 02 - RETAIL & SHOPPING
  {
    id: "retail",
    name: "Retail & Shopping",
    category: "RETAIL STORES & SHOPPING CENTERS",
    title: "Smarter Monitoring for Retail Environments",
    description:
      "Retail stores, supermarkets, showrooms, and shopping centers benefit from monitoring of customer areas, billing counters, stockrooms, and entrances to support day-to-day security.",
    image: "/assets/img/industries/retail.jpg",
    capabilities: [
      "Indoor dome and wide-angle cameras",
      "Entrance, exit, and checkout monitoring",
      "Stockroom and inventory-area surveillance",
      "HD video recording and playback",
      "Remote multi-store viewing",
    ],
    benefits: [
      "Support for loss prevention",
      "Better visibility of retail activity",
      "Easier review of security incidents",
      "Improved oversight of stock areas",
      "Centralized viewing across locations",
    ],
  },

  // 03 - MANUFACTURING & INDUSTRIES
  {
    id: "manufacturing",
    name: "Manufacturing & Industries",
    category: "MANUFACTURING & INDUSTRIAL FACILITIES",
    title: "Reliable Security for Industrial Operations",
    description:
      "Manufacturing facilities need effective monitoring across production floors, equipment areas, perimeter boundaries, and loading zones to support site security and operational oversight.",
    image: "/assets/img/industries/manufacturing.jpg",
    capabilities: [
      "Industrial indoor and outdoor CCTV",
      "Perimeter and entrance surveillance",
      "Low-light and night-vision monitoring",
      "Multi-channel NVR recording",
      "Industrial network connectivity",
    ],
    benefits: [
      "Improved site-wide visibility",
      "Better perimeter security oversight",
      "Support for investigating incidents",
      "Monitoring of critical operational zones",
      "Adaptable surveillance coverage",
    ],
  },

  // 04 - WAREHOUSES & LOGISTICS
  {
    id: "warehousing",
    name: "Warehouses & Logistics",
    category: "WAREHOUSING & LOGISTICS",
    title: "Complete Visibility Across Storage & Logistics",
    description:
      "Warehouses and distribution centers require surveillance across storage aisles, dispatch areas, loading bays, and vehicle entry points to help safeguard goods, facilities, and operations.",
    image: "/assets/img/industries/warehousing.jpg",
    capabilities: [
      "Wide-area warehouse CCTV coverage",
      "Loading and unloading bay monitoring",
      "Vehicle entrance surveillance",
      "Extended video recording and storage",
      "Remote facility monitoring",
    ],
    benefits: [
      "Improved inventory-area visibility",
      "Better monitoring of goods movement",
      "Support for loss-prevention efforts",
      "Recorded footage for incident review",
      "Security oversight across multiple zones",
    ],
  },

  // 05 - SCHOOLS & EDUCATIONAL INSTITUTIONS
  {
    id: "education",
    name: "Schools & Educational Institutions",
    category: "EDUCATIONAL INSTITUTIONS & CAMPUSES",
    title: "Supporting Safer Learning Environments",
    description:
      "Schools, colleges, universities, and training institutions need appropriate surveillance and access security across campus entrances, shared facilities, corridors, and administrative areas.",
    image: "/assets/img/industries/education.jpg",
    capabilities: [
      "Campus entrance and perimeter CCTV",
      "Corridor and common-area surveillance",
      "Restricted-room access control",
      "Centralized NVR recording",
      "Secure network connectivity",
    ],
    benefits: [
      "Better campus security awareness",
      "Managed access to sensitive areas",
      "Support for investigating incidents",
      "Improved monitoring of shared spaces",
      "More coordinated security oversight",
    ],
  },

  // 06 - HOSPITALS & HEALTHCARE
  {
    id: "healthcare",
    name: "Hospitals & Healthcare",
    category: "HOSPITALS & HEALTHCARE FACILITIES",
    title: "Dependable Security for Healthcare Spaces",
    description:
      "Hospitals, clinics, and diagnostic centers require thoughtfully planned surveillance and access control to support facility security while respecting patient privacy and restricted areas.",
    image: "/assets/img/industries/healthcare.jpg",
    capabilities: [
      "Entrance and reception-area CCTV",
      "Public corridor and parking monitoring",
      "Controlled access to restricted rooms",
      "Secure NVR footage management",
      "Networked multi-camera surveillance",
    ],
    benefits: [
      "Better facility security visibility",
      "Controlled access to operational areas",
      "Support for reviewing security incidents",
      "Centralized surveillance management",
      "Privacy-aware security planning",
    ],
  },

  // 07 - HOTELS & HOSPITALITY
  {
    id: "hospitality",
    name: "Hotels & Hospitality",
    category: "HOTELS & HOSPITALITY",
    title: "Reliable Security for Guest Environments",
    description:
      "Hotels, resorts, and serviced apartments require appropriate monitoring of entrances, reception areas, parking facilities, shared spaces, and staff-only operational zones.",
    image: "/assets/img/industries/hospitality.jpg",
    capabilities: [
      "Entrance and reception surveillance",
      "Common-area and parking CCTV",
      "Staff-only access management",
      "Centralized DVR/NVR recording",
      "Connected monitoring infrastructure",
    ],
    benefits: [
      "Better visibility of public spaces",
      "Improved monitoring of property access",
      "Support for incident investigation",
      "Controlled access to operational zones",
      "Security support for guest-facing facilities",
    ],
  },

  // 08 - RESIDENTIAL & COMMUNITIES
  {
    id: "residential",
    name: "Residential & Communities",
    category: "APARTMENTS & RESIDENTIAL COMMUNITIES",
    title: "Connected Security for Modern Living",
    description:
      "Apartments, villas, and gated communities benefit from surveillance and entry-management technologies for common areas, parking facilities, visitor access, and perimeter monitoring.",
    image: "/assets/img/industries/residential-communities.jpg",
    capabilities: [
      "Main-gate and perimeter CCTV",
      "Parking and common-area monitoring",
      "Video door phone and intercom systems",
      "Visitor entry access control",
      "DVR/NVR and remote viewing",
    ],
    benefits: [
      "Better awareness of entry activity",
      "Improved visitor communication",
      "Visibility across shared facilities",
      "Footage available for authorized review",
      "Convenient property security oversight",
    ],
  },
];

// ==========================================
// INDUSTRY CARD COMPONENT
// ==========================================

const IndustryCard = ({ industry, index }) => {
  const industryNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      id={industry.id}
      className={`inet-industries-card inet-industries-reveal ${
        index % 2 === 1
          ? "inet-industries-card-reverse"
          : ""
      }`}
      aria-labelledby={`industry-title-${industry.id}`}
    >
      {/* INDUSTRY IMAGE */}
      <div className="inet-industries-image">
        <img
          src={industry.image}
          alt={`${industry.name} security application`}
          loading="lazy"
        />

        <div className="inet-industries-image-badge">
          <span>INDUSTRY</span>
          <strong>{industryNumber}</strong>
        </div>
      </div>

      {/* INDUSTRY CONTENT */}
      <div className="inet-industries-content">

        {/* INDUSTRY NUMBER & CATEGORY */}
        <div className="inet-industries-card-top">
          <span className="inet-industries-number">
            {industryNumber}
          </span>

          <span
            className="inet-industries-card-rule"
            aria-hidden="true"
          ></span>

          <span className="inet-industries-category">
            {industry.category}
          </span>
        </div>

        {/* INDUSTRY HEADING */}
        <h2 id={`industry-title-${industry.id}`}>
          {industry.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="inet-industries-description">
          {industry.description}
        </p>

        {/* KEY CAPABILITIES & BENEFITS */}
        <div className="inet-industries-details">

          {/* LEFT - CAPABILITIES */}
          <div className="inet-industries-detail-column">
            <h3>OUR KEY CAPABILITIES</h3>

            <ul>
              {industry.capabilities.map((item, i) => (
                <li key={i}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - BENEFITS */}
          <div className="inet-industries-detail-column">
            <h3>KEY BENEFITS</h3>

            <ul>
              {industry.benefits.map((item, i) => (
                <li key={i}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </article>
  );
};

// ==========================================
// INDUSTRIES MAIN COMPONENT
// ==========================================

const IndustriesArea = () => {
  const sectionRef = useRef(null);

  const [activeIndustry, setActiveIndustry] = useState(
    "corporate-offices"
  );

  // SCROLL REVEAL ANIMATION
  useEffect(() => {
    const root = sectionRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(
      ".inet-industries-reveal"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((el) =>
        el.classList.add("is-visible")
      );

      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((el) =>
      revealObserver.observe(el)
    );

    return () => revealObserver.disconnect();
  }, []);

  // ACTIVE INDUSTRY HIGHLIGHT
  useEffect(() => {
    const cards = industries
      .map((industry) =>
        document.getElementById(industry.id)
      )
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          setActiveIndustry(visible[0].target.id);
        }
      },
      {
        rootMargin: "-145px 0px -35% 0px",
        threshold: [0, 0.1, 0.3, 0.6],
      }
    );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () => observer.disconnect();
  }, []);

  // HEADER DROPDOWN ANCHOR NAVIGATION
  useEffect(() => {
    const navigateToHash = () => {
      const id = decodeURIComponent(
        window.location.hash.replace(/^#/, "")
      );

      if (!id) return;

      const target = document.getElementById(id);

      if (target) {
        setActiveIndustry(id);

        target.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    };

    const frame = window.requestAnimationFrame(
      navigateToHash
    );

    window.addEventListener(
      "hashchange",
      navigateToHash
    );

    return () => {
      window.cancelAnimationFrame(frame);

      window.removeEventListener(
        "hashchange",
        navigateToHash
      );
    };
  }, []);

  return (
    <main
      className="inet-industries-page"
      ref={sectionRef}
    >

      {/* PAGE HEADING */}
  

      {/* STICKY INDUSTRY NAVIGATION */}
      <nav
        className="inet-industries-nav"
        aria-label="Industry sections"
      >
        <div className="container">

          <div className="inet-industries-nav-track">

            {industries.map((industry, index) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className={`inet-industries-nav-link ${
                  activeIndustry === industry.id
                    ? "is-active"
                    : ""
                }`}
                aria-current={
                  activeIndustry === industry.id
                    ? "location"
                    : undefined
                }
                onClick={() =>
                  setActiveIndustry(industry.id)
                }
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {industry.name}
              </a>
            ))}

          </div>

        </div>
      </nav>

      {/* ALL EIGHT INDUSTRIES - CORRECT ORDER */}
      <section
        className="inet-industries-list"
        aria-label="Industry security applications"
      >
        <div className="container">

          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
            />
          ))}

        </div>
      </section>

      {/* FINAL CONTACT CTA */}
      <section className="inet-industries-cta">
        <div className="container">

          <div className="inet-industries-cta-inner">

            <div>
              <span>
                LET'S DISCUSS YOUR SECURITY NEEDS
              </span>

              <h2>
                The Right Security Technology
                for Your Environment.
              </h2>

              <p>
                Connect with iNet Communications to discuss
                surveillance, recording, access control,
                and networking product requirements.
              </p>
            </div>

            <a href="tel:+919849461843">
              Call +91 9849461843
              <span aria-hidden="true">↗</span>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default IndustriesArea;
