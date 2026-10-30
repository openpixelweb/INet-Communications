
import React, { useEffect, useRef, useState } from "react";

const products = [
  {
    id: "cctv-cameras",
    title: "CCTV Cameras",
    category: "Surveillance Equipment",
    description:
      "A range of indoor and outdoor CCTV cameras for monitoring entrances, workplaces, commercial premises and residential properties.",
    image: "/assets/img/products/cctv-cameras.jpg",
    types: [
      "Bullet Cameras",
      "Dome & Turret Cameras",
      "PTZ Cameras",
      "Indoor & Outdoor Cameras",
    ],
    applications: "Homes, offices, retail and industrial sites",
  },
  {
    id: "ip-network-cameras",
    title: "IP & Network Cameras",
    category: "Network Surveillance",
    description:
      "Network-connected surveillance cameras designed for high-resolution monitoring and integration with compatible recording systems.",
    image: "/assets/img/products/ip-network-cameras.jpg",
    types: [
      "IP Bullet Cameras",
      "IP Dome Cameras",
      "PoE Cameras",
      "Network PTZ Cameras",
    ],
    applications: "Offices, campuses and commercial facilities",
  },
  {
    id: "dvr-nvr-systems",
    title: "DVR & NVR Systems",
    category: "Video Recording",
    description:
      "Recording equipment for managing, storing and reviewing footage from compatible CCTV and IP surveillance cameras.",
    image: "/assets/img/products/dvr-nvr-systems.jpg",
    types: [
      "Digital Video Recorders",
      "Network Video Recorders",
      "Multi-Channel Recorders",
      "Recording Storage Accessories",
    ],
    applications: "Residential, commercial and industrial security",
  },
  {
    id: "access-control-systems",
    title: "Access Control Systems",
    category: "Entry Management",
    description:
      "Access management devices that help regulate entry to offices, buildings and restricted operational areas.",
    image: "/assets/img/products/access-control.jpg",
    types: [
      "Biometric Readers",
      "RFID Card Readers",
      "Keypad Access Devices",
      "Access Controllers & Locks",
    ],
    applications: "Offices, institutions and secured areas",
  },
  {
    id: "video-door-phones",
    title: "Video Door Phones & Intercom",
    category: "Visitor Communication",
    description:
      "Audio and video communication systems that make it easier to identify visitors and manage entry at doors and gates.",
    image: "/assets/img/products/video-door-phones.jpg",
    types: [
      "Video Door Phones",
      "Indoor Monitors",
      "Outdoor Door Stations",
      "Audio & Apartment Intercoms",
    ],
    applications: "Homes, apartments and commercial buildings",
  },
  {
    id: "networking-products",
    title: "Networking Products",
    category: "Network Infrastructure",
    description:
      "Networking equipment for connecting cameras, recorders and other devices within a reliable surveillance infrastructure.",
    image: "/assets/img/products/networking-products.jpg",
    types: [
      "Network Switches",
      "PoE Switches",
      "Routers",
      "Wireless Access Points",
    ],
    applications: "Security networks and business connectivity",
  },
  {
    id: "security-accessories",
    title: "CCTV & Security Accessories",
    category: "Installation Accessories",
    description:
      "Supporting products for CCTV installation, equipment connectivity, power distribution and system maintenance.",
    image: "/assets/img/products/security-accessories.jpg",
    types: [
      "CCTV Cables & Connectors",
      "Power Adapters",
      "Mounting Brackets",
      "Junction Boxes & Accessories",
    ],
    applications: "Security installation, upgrades and maintenance",
  },
];

const ProductsArea = () => {
  const [activeId, setActiveId] = useState(products[0].id);
  const sectionRef = useRef(null);

  // Highlight current category while scrolling
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const elements = products
      .map((product) =>
        root.querySelector(`#${product.id}`)
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
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  // Reveal sections smoothly
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(
      ".inet-catalog-reveal"
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
      { threshold: 0.06 }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  // Support direct links from header dropdown
  useEffect(() => {
    const goToHash = () => {
      const id = decodeURIComponent(
        window.location.hash.replace(/^#/, "")
      );

      if (!id) return;

      const target = document.getElementById(id);

      if (target) {
        setActiveId(id);
        target.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    };

    const frame = window.requestAnimationFrame(
      goToHash
    );

    window.addEventListener("hashchange", goToHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(
        "hashchange",
        goToHash
      );
    };
  }, []);

  return (
    <div className="inet-catalog-page" ref={sectionRef}>

      {/* COMPACT INTRODUCTION */}
      <section className="inet-catalog-intro">
        <div className="container">
          <span className="inet-catalog-eyebrow">
            SECURITY & NETWORKING PRODUCTS
          </span>

          <h2>Explore Our Product Range</h2>

          <p>
            From surveillance cameras and video recording
            systems to access control and networking
            equipment, find products suited to your
            security requirements.
          </p>
        </div>
      </section>

      {/* PRODUCT DIRECTORY */}
      <section className="inet-catalog-main">
        <div className="container">
          <div className="inet-catalog-layout">

            {/* CATEGORY NAVIGATION */}
            <aside className="inet-catalog-sidebar">
              <nav
                className="inet-catalog-nav"
                aria-label="Product categories"
              >
                <div className="inet-catalog-nav-heading">
                  PRODUCT CATEGORIES
                </div>

                {products.map((product) => (
                  <a
                    href={`#${product.id}`}
                    key={product.id}
                    onClick={() => setActiveId(product.id)}
                    className={`inet-catalog-nav-link ${
                      activeId === product.id
                        ? "is-active"
                        : ""
                    }`}
                    aria-current={
                      activeId === product.id
                        ? "location"
                        : undefined
                    }
                  >
                    {product.title}

                    <span aria-hidden="true">›</span>
                  </a>
                ))}

                <div className="inet-catalog-sidebar-contact">
                  <strong>Need product guidance?</strong>
                  <p>
                    Speak with our team about
                    your requirements.
                  </p>
                  <a href="tel:+919849461843">
                    +91 9849461843
                  </a>
                </div>
              </nav>
            </aside>

            {/* ALL SEVEN PRODUCT SECTIONS */}
            <div className="inet-catalog-products">
              {products.map((product) => (
                <article
                  id={product.id}
                  key={product.id}
                  className="inet-catalog-product inet-catalog-reveal"
                  aria-labelledby={`title-${product.id}`}
                >
                  <div className="inet-catalog-product-image">
                    <img
                      src={product.image}
                      alt={`${product.title} product equipment`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="inet-catalog-product-content">

                    <span className="inet-catalog-product-category">
                      {product.category}
                    </span>

                    <h3 id={`title-${product.id}`}>
                      {product.title}
                    </h3>

                    <p className="inet-catalog-description">
                      {product.description}
                    </p>

                    <h4>Product Types</h4>

                    <ul className="inet-catalog-types">
                      {product.types.map((type) => (
                        <li key={type}>
                          <span aria-hidden="true">✓</span>
                          {type}
                        </li>
                      ))}
                    </ul>

                    <div className="inet-catalog-applications">
                      <strong>Applications</strong>
                      <p>{product.applications}</p>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

 



    </div>
  );
};

export default ProductsArea;
