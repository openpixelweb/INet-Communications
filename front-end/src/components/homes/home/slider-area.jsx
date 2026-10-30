
import Link from "next/link";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/slider/banner.jpg",
    tag: "ADVANCED SECURITY & SURVEILLANCE",
    title: "Smarter Surveillance.",
    highlight: "Stronger Security.",
    description:
      "Discover advanced CCTV cameras and reliable security solutions designed to protect your people, property, and business.",
    primaryText: "Explore Products",
    primaryLink: "#",
    secondaryText: "Get In Touch",
    secondaryLink: "#",
  },
  {
    id: 2,
    bg_img: "/assets/img/slider/sl-2.jpg",
    tag: "SMART SECURITY TECHNOLOGY",
    title: "Intelligent Monitoring.",
    highlight: "Complete Control.",
    description:
      "Experience high-quality surveillance, smarter monitoring, and connected security technology built for modern environments.",
    primaryText: "Our Solutions",
    primaryLink: "#",
    secondaryText: "Get In Touch",
    secondaryLink: "#",
  },
  {
    id: 3,
    bg_img: "/assets/img/slider/sl-3.jpg",
    tag: "SECURITY FOR EVERY INDUSTRY",
    title: "Every Industry.",
    highlight: "Better Protected.",
    description:
      "From corporate offices and retail spaces to industrial facilities and residential communities, we help secure what matters most.",
    primaryText: "Explore Industries",
    primaryLink: "#",
    secondaryText: "Get In Touch",
    secondaryLink: "#",
  },
];

const SliderArea = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    accessibility: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  return (
    <section
      className="inet-hero"
      aria-label="iNet Communications security solutions"
    >
      <Slider {...settings} ref={sliderRef}>
        {slider_data.map((item) => (
          <div key={item.id}>
            <div
              className="inet-hero-slide"
              style={{
                backgroundImage: `url("${item.bg_img}")`,
              }}
            >
              <div className="inet-hero-overlay"></div>

              <div className="container inet-hero-container">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-9 col-md-11">
                    <div className="inet-hero-content">
                      <div className="inet-hero-tag">
                        <span className="inet-hero-tag-line"></span>
                        {item.tag}
                      </div>

                      <h1 className="inet-hero-title">
                        {item.title}
                        <span>{item.highlight}</span>
                      </h1>

                      <p className="inet-hero-description">
                        {item.description}
                      </p>

                      <div className="inet-hero-buttons">
                        <Link
                          href={item.primaryLink}
                          className="inet-hero-btn-primary"
                        >
                          {item.primaryText}
                          <span aria-hidden="true">↗</span>
                        </Link>

                        <Link
                          href={item.secondaryLink}
                          className="inet-hero-btn-secondary"
                        >
                          {item.secondaryText}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inet-hero-bottom">
                <div className="inet-hero-bottom-inner">
                  <span className="inet-hero-bottom-line"></span>
                  CCTV & SECURITY SOLUTIONS
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="inet-hero-navigation">
        <button
          type="button"
          className="inet-hero-arrow"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous banner"
        >
          ←
        </button>

        <div className="inet-hero-count">
          <span>
            {String(activeSlide + 1).padStart(2, "0")}
          </span>
          <span className="inet-hero-count-separator">/</span>
          <span>
            {String(slider_data.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          className="inet-hero-arrow"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next banner"
        >
          →
        </button>
      </div>

      <div className="inet-hero-dots">
        {slider_data.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to banner ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`inet-hero-dot ${
              activeSlide === index ? "active" : ""
            }`}
            onClick={() => sliderRef.current?.slickGoTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderArea;
