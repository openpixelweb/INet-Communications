
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";

const caseStudies = [
  {
    id: 1,
    number: "01",
    category: "CORPORATE SECURITY",
    title: "Smarter Surveillance for Corporate Workspaces",
    description:
      "Explore how IP surveillance, video recording, and access control can support safer commercial workplaces.",
    image: "/assets/img/corporate.jpg",
    industry: "Corporate & Commercial",
    solutions: "IP Cameras • Access Control",
    link: "#",
  },
  {
    id: 2,
    number: "02",
    category: "INDUSTRIAL SECURITY",
    title: "Enhanced Security for Industrial Facilities",
    description:
      "Discover surveillance technologies for production areas, warehouses, perimeter monitoring, and facility access.",
    image: "/assets/img/industrial.jpg",
    industry: "Manufacturing & Industries",
    solutions: "CCTV • NVR • Networking",
    link: "#",
  },
  {
    id: 3,
    number: "03",
    category: "RESIDENTIAL SECURITY",
    title: "Connected Security for Residential Communities",
    description:
      "See how entrance surveillance, video door phones, and access control technologies can support residential security.",
    image: "/assets/img/residential.jpg",
    industry: "Residential & Communities",
    solutions: "CCTV • Video Door Phones",
    link: "#",
  },
];

const CaseStudyArea = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 650,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    accessibility: true,
    afterChange: (index) => setCurrentSlide(index),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
        },
      },
    ],
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements = section.querySelectorAll(
      ".inet-case-reveal"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      revealElements.forEach((element) =>
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
        rootMargin: "0px 0px -35px 0px",
      }
    );

    revealElements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-case-section"
      id="case-studies"
      ref={sectionRef}
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="inet-case-header inet-case-reveal">
          <div className="inet-case-heading-content">
            <div className="inet-case-eyebrow">
              <span className="inet-case-eyebrow-line"></span>
              SECURITY APPLICATIONS
            </div>

            <h2 className="inet-case-heading">
              Security in Action.
              <span> Solutions for Real-World Needs.</span>
            </h2>

            <p className="inet-case-intro">
              Discover practical surveillance and security
              applications across corporate, industrial,
              and residential environments.
            </p>
          </div>

          
        </div>

        {/* CASE STUDIES SLIDER */}
        <div className="inet-case-slider inet-case-reveal">
          <Slider {...sliderSettings} ref={sliderRef}>
            {caseStudies.map((project) => (
              <div
                key={project.id}
                className="inet-case-slide"
              >
                <Link
                  href={project.link}
                  className="inet-case-card"
                  aria-label={`Explore ${project.title}`}
                >
                  <div className="inet-case-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <span className="inet-case-number">
                      {project.number}
                    </span>

                    <span className="inet-case-category">
                      {project.category}
                    </span>

                    <span
                      className="inet-case-image-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="inet-case-content">
                    <div className="inet-case-industry">
                      <span className="inet-case-industry-dot"></span>
                      {project.industry}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="inet-case-technology">
                      <span>TECHNOLOGIES</span>
                      <strong>{project.solutions}</strong>
                    </div>

                    <div className="inet-case-card-footer">
                      <span>Explore Application</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="inet-case-bottom inet-case-reveal">
          <div className="inet-case-pagination">
            

            

           
          </div>

          <Link
            href="#"
            className="inet-case-view-all"
          >
            View All Case Studies
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CaseStudyArea;
