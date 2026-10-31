
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const products = [
  {
    id: "01",
    title: "CCTV Cameras",
    description:
      "Professional indoor and outdoor cameras for reliable surveillance and clear visibility.",
    image: "/assets/img/cctv-cameras.jpg",
    link: "#",
    label: "VIDEO SURVEILLANCE",
  },
  {
    id: "02",
    title: "IP & Network Cameras",
    description:
      "High-resolution network cameras designed for connected, intelligent security systems.",
    image: "/assets/img/ip-cameras.jpg",
    link: "#",
    label: "SMART MONITORING",
  },
  {
    id: "03",
    title: "DVR & NVR Systems",
    description:
      "Dependable video recording and storage systems for effective surveillance management.",
    image: "/assets/img/dvr-nvr.jpg",
    link: "#",
    label: "VIDEO RECORDING",
  },
  {
    id: "04",
    title: "Access Control Systems",
    description:
      "Modern entry management technology for offices, facilities and restricted areas.",
    image: "/assets/img/access-control.jpg",
    link: "#",
    label: "ENTRY SECURITY",
  },
  {
    id: "05",
    title: "Networking Products",
    description:
      "Reliable networking devices and connectivity equipment for security infrastructure.",
    image: "/assets/img/networking.jpg",
    link: "#",
    label: "NETWORK INFRASTRUCTURE",
  },
  {
    id: "06",
    title: "Security Accessories",
    description:
      "Essential cables, connectors, power supplies and accessories for complete installations.",
    image: "/assets/img/accessories.jpg",
    link: "#",
    label: "ESSENTIAL EQUIPMENT",
  },
];

const ProductArea = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(
      ".inet-product-reveal"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      cards.forEach((card) =>
        card.classList.add("is-visible")
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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-products-section"
      ref={sectionRef}
      id="our-products"
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="inet-products-header">
          <div className="inet-products-heading-area">
            <div className="inet-products-eyebrow">
              <span className="inet-products-eyebrow-line"></span>
              OUR PRODUCT RANGE
            </div>

            <h2 className="inet-products-heading">
              Technology That Protects.
              <span> Solutions That Perform.</span>
            </h2>

            <p className="inet-products-intro">
              Explore our carefully selected range of
              surveillance, access control and networking
              products designed to support the security
              needs of modern businesses and industries.
            </p>
          </div>

          <Link
            href="#"
            className="inet-products-all-link"
          >
            View All Products
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="row g-4 inet-products-grid">
          {products.map((product, index) => (
            <div
              className="col-xl-4 col-md-6 inet-product-reveal"
              key={product.id}
              style={{
                "--reveal-delay": `${(index % 3) * 100}ms`,
              }}
            >
              <Link
                href={product.link}
                className="inet-product-card"
                aria-label={`Explore ${product.title}`}
              >
                <div className="inet-product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />

                  <span className="inet-product-number">
                    {product.id}
                  </span>

                  <span
                    className="inet-product-image-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>

                  <span className="inet-product-image-line"></span>
                </div>

                <div className="inet-product-content">
                  <div className="inet-product-label">
                    {product.label}
                  </div>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <div className="inet-product-footer">
                    <span>Explore Category</span>
                    <span
                      className="inet-product-footer-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="inet-products-cta inet-product-reveal">
          

          <div className="inet-products-cta-content">
            <span className="inet-products-cta-label">
              NEED HELP CHOOSING?
            </span>

            <h3>
              Not Sure Which Security Products You Need?
            </h3>

            <p>
              Connect with our team to explore equipment
              suited to your project requirements.
            </p>
          </div>

          <Link
            href="#"
            className="inet-products-cta-button"
          >
            Get Expert Guidance
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductArea;
