
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const industries = [
  {
    id: "corporate",
    number: "01",
    title: "Corporate Offices",
    icon: "building",
    subtitle: "Workplace & Commercial Security",
    description:
      "Support safer workplaces with surveillance and entry management across offices, business parks, entrances and common areas.",
    applications: [
      "Entrance & Exit Monitoring",
      "Visitor Access Management",
      "Parking Area Surveillance",
      "Common Area Monitoring",
    ],
    solutions: [
      "IP Cameras",
      "Access Control",
      "NVR Systems",
    ],
    link: "#",
  },
  {
    id: "industrial",
    number: "02",
    title: "Manufacturing",
    icon: "factory",
    subtitle: "Industrial Security",
    description:
      "Improve visibility across manufacturing facilities, production areas and restricted operational zones with dependable security technology.",
    applications: [
      "Production Area Monitoring",
      "Perimeter Surveillance",
      "Restricted Zone Access",
      "Entry & Exit Control",
    ],
    solutions: [
      "Industrial CCTV",
      "IP Surveillance",
      "Access Control",
    ],
    link: "#",
  },
  {
    id: "warehouse",
    number: "03",
    title: "Warehousing",
    icon: "warehouse",
    subtitle: "Storage & Logistics Security",
    description:
      "Monitor storage areas, loading bays, logistics operations and vehicle movement across warehouses and distribution facilities.",
    applications: [
      "Loading Bay Monitoring",
      "Storage Area Surveillance",
      "Vehicle Entry Monitoring",
      "Warehouse Perimeter Security",
    ],
    solutions: [
      "CCTV Cameras",
      "NVR Systems",
      "Network Switches",
    ],
    link: "#",
  },
  {
    id: "retail",
    number: "04",
    title: "Retail & Shopping",
    icon: "store",
    subtitle: "Retail Security",
    description:
      "Enhance security visibility across retail environments, stores, showrooms and customer-facing commercial spaces.",
    applications: [
      "Shop Floor Monitoring",
      "Entrance Surveillance",
      "Billing Counter Monitoring",
      "Stockroom Security",
    ],
    solutions: [
      "Dome Cameras",
      "Video Recording",
      "Remote Viewing",
    ],
    link: "#",
  },
  {
    id: "education",
    number: "05",
    title: "Education",
    icon: "school",
    subtitle: "Campus Security",
    description:
      "Support safer educational environments through reliable surveillance of school entrances, campuses, corridors and common facilities.",
    applications: [
      "Campus Entrance Monitoring",
      "Corridor Surveillance",
      "Common Area Security",
      "Visitor Management",
    ],
    solutions: [
      "CCTV Surveillance",
      "Access Control",
      "Recording Systems",
    ],
    link: "#",
  },
  {
    id: "healthcare",
    number: "06",
    title: "Healthcare",
    icon: "hospital",
    subtitle: "Healthcare Facility Security",
    description:
      "Support security management in hospitals, clinics and healthcare environments while respecting patient privacy.",
    applications: [
      "Public Entrance Monitoring",
      "Visitor Access Management",
      "Parking Surveillance",
      "Restricted Area Security",
    ],
    solutions: [
      "IP Cameras",
      "Access Control",
      "Video Management",
    ],
    link: "#",
  },
  {
    id: "hospitality",
    number: "07",
    title: "Hospitality",
    icon: "hotel",
    subtitle: "Guest & Property Security",
    description:
      "Improve property security across hotels, resorts, guest facilities and shared spaces with integrated surveillance technologies.",
    applications: [
      "Reception Area Surveillance",
      "Parking Security",
      "Entrance Monitoring",
      "Service Area Monitoring",
    ],
    solutions: [
      "CCTV Cameras",
      "Access Control",
      "NVR Systems",
    ],
    link: "#",
  },
  {
    id: "residential",
    number: "08",
    title: "Residential",
    icon: "home",
    subtitle: "Residential & Community Security",
    description:
      "Help secure apartments, residential complexes and gated communities with surveillance and modern entrance security solutions.",
    applications: [
      "Main Gate Surveillance",
      "Visitor Entry Control",
      "Parking Area Monitoring",
      "Common Space Security",
    ],
    solutions: [
      "CCTV Cameras",
      "Video Door Phones",
      "Access Control",
    ],
    link: "#",
  },
];

const icons = {
  building: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22v-4h6v4M8 6h2m4 0h2M8 10h2m4 0h2M8 14h2m4 0h2" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V11l6 4v-4l6 4V5h5v16H3Z" />
      <path d="M7 18h2m3 0h2m3 0h2" />
    </>
  ),
  warehouse: (
    <>
      <path d="m2 10 10-7 10 7v11H2V10Z" />
      <path d="M7 21v-9h10v9M7 16h10" />
    </>
  ),
  store: (
    <>
      <path d="M3 10h18l-2-7H5l-2 7Z" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  school: (
    <>
      <path d="m2 9 10-6 10 6M4 9v12h16V9" />
      <path d="M9 21v-7h6v7M9 10h6" />
    </>
  ),
  hospital: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 6v7M8.5 9.5h7M9 21v-5h6v5" />
    </>
  ),
  hotel: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="1" />
      <path d="M9 6h2m3 0h1M9 10h2m3 0h1M9 14h2m3 0h1M10 22v-4h4v4" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7v11H3V10Z" />
      <path d="M9 21v-8h6v8" />
    </>
  ),
};

const IndustryIcon = ({ name, size = 28 }) => (
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
    {icons[name] || icons.building}
  </svg>
);

const IndustryArea = () => {
  const [selectedId, setSelectedId] = useState("corporate");
  const sectionRef = useRef(null);

  const selected =
    industries.find((industry) => industry.id === selectedId) ||
    industries[0];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealItems = section.querySelectorAll(
      ".inet-ind-reveal"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
    ) {
      revealItems.forEach((item) =>
        item.classList.add("is-visible")
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

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-industry-section"
      id="industries"
      ref={sectionRef}
    >
      <div className="container">

        {/* SECTION HEADING */}
        <div className="inet-industry-heading inet-ind-reveal">
          <div className="inet-ind-eyebrow">
            <span></span>
            INDUSTRIES WE SERVE
          </div>

          <h2>
            Security for Every
            <span> Environment.</span>
          </h2>

          <p>
            Different industries demand different approaches
            to security. Explore how surveillance, access
            control and connected technologies can support
            your business environment.
          </p>
        </div>

        {/* INTERACTIVE DASHBOARD */}
        <div className="inet-ind-dashboard">

          {/* LEFT: INDUSTRY SELECTION */}
          <div className="inet-ind-selector inet-ind-reveal">
            <div className="inet-ind-selector-heading">
              <span>EXPLORE INDUSTRIES</span>
              <span>08 SECTORS</span>
            </div>

            <div className="inet-ind-selector-grid">
              {industries.map((industry, index) => (
                <button
                  type="button"
                  key={industry.id}
                  className={`inet-ind-option ${
                    selectedId === industry.id
                      ? "active"
                      : ""
                  }`}
                  style={{
                    "--ind-delay": `${(index % 4) * 60}ms`,
                  }}
                  onClick={() => setSelectedId(industry.id)}
                  aria-pressed={selectedId === industry.id}
                  aria-controls="inet-ind-detail-panel"
                >
                  <span className="inet-ind-option-top">
                    <span className="inet-ind-option-icon">
                      <IndustryIcon name={industry.icon} />
                    </span>

                    <span className="inet-ind-option-number">
                      {industry.number}
                    </span>
                  </span>

                  <span className="inet-ind-option-bottom">
                    <span>{industry.title}</span>
                    <span
                      className="inet-ind-option-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: SELECTED INDUSTRY DETAILS */}
          <div
            className="inet-ind-panel inet-ind-reveal"
            id="inet-ind-detail-panel"
            aria-label={`${selected.title} security applications`}
          >
            <div className="inet-ind-panel-top">
              <span>SECURITY APPLICATIONS</span>
              <span className="inet-ind-panel-number">
                {selected.number} / 08
              </span>
            </div>

            <div
              key={selected.id}
              className="inet-ind-panel-animated"
            >
              <div className="inet-ind-panel-icon">
                <IndustryIcon
                  name={selected.icon}
                  size={34}
                />
              </div>

              <span className="inet-ind-panel-category">
                {selected.subtitle}
              </span>

              <h3>{selected.title}</h3>

              <p className="inet-ind-panel-description">
                {selected.description}
              </p>

              <div className="inet-ind-panel-divider"></div>

              <h4>Typical Security Applications</h4>

              <div className="inet-ind-application-list">
                {selected.applications.map((application) => (
                  <div
                    className="inet-ind-application"
                    key={application}
                  >
                    <span
                      className="inet-ind-check"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {application}
                  </div>
                ))}
              </div>

              <div className="inet-ind-panel-solutions">
                <h4>Relevant Technologies</h4>

                <div className="inet-ind-tags">
                  {selected.solutions.map((solution) => (
                    <span key={solution}>
                      {solution}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={selected.link}
                className="inet-ind-panel-link"
              >
                Explore {selected.title}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="inet-industry-footer inet-ind-reveal">
          <div>
            <h3>Don't See Your Industry Listed?</h3>
            <p>
              Tell us about your security requirements.
              Our team can help you explore suitable options.
            </p>
          </div>

          <Link href="#" className="inet-industry-cta">
            Discuss Your Project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default IndustryArea;
