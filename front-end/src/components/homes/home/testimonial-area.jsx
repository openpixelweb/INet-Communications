
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const reviewSource =
  "https://www.justdial.com/Hyderabad/Inet-Communications/040PXX40-XX40-190607210758-T5T3_BZDET";

// Replace these samples with genuine customer reviews.
// Do not publish sample reviews as real testimonials.
const customerReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Business Owner",
    rating: 5,
    review:
      "Good range of CCTV cameras and security equipment. The team explained the available options clearly and helped us choose suitable products for our office.",
  },
  {
    id: 2,
    name: "Priya Reddy",
    designation: "Residential Customer",
    rating: 5,
    review:
      "We were looking for security cameras for our home. The product information was clear, and the team helped us understand the different camera options.",
  },
  {
    id: 3,
    name: "Sandeep Sharma",
    designation: "IT Administrator",
    rating: 5,
    review:
      "A useful place for CCTV and networking products. We received helpful guidance on IP cameras, NVR systems, and compatible network equipment.",
  },
];

const TestimonialArea = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = customerReviews.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + totalReviews) % totalReviews
    );
  };

  // Automatic slide change
  useEffect(() => {
    if (isPaused || totalReviews <= 1) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % totalReviews
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, totalReviews]);

  // Existing scroll animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(
      ".inet-review-reveal"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      elements.forEach((el) =>
        el.classList.add("is-visible")
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
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="inet-reviews-section"
      ref={sectionRef}
      id="customer-reviews"
      aria-label="Customer feedback"
    >
      <div className="container">
        <div className="inet-reviews-layout">

          {/* LEFT: INTRO - UNCHANGED */}
          <div className="inet-reviews-intro inet-review-reveal">
            <span className="inet-reviews-eyebrow">
              CUSTOMER FEEDBACK
            </span>

            <h2>
              Your Trust.
              <span> Our Priority.</span>
            </h2>

            <p>
              At iNet Communications, we value every
              customer experience. Explore our public
              business rating and share your feedback
              to help us serve you better.
            </p>

            <a
              href={reviewSource}
              target="_blank"
              rel="noopener noreferrer"
              className="inet-reviews-text-link"
            >
              View Public Reviews
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* RIGHT: CUSTOMER REVIEWS SLIDER */}
          <div className="inet-reviews-showcase inet-review-reveal">

            <div
              className="inet-review-slider"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget
                  )
                ) {
                  setIsPaused(false);
                }
              }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Customer testimonials"
            >

              {/* TOP */}
              <div className="inet-review-slider-top">
                <div className="inet-review-quote-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 11H6.1c.2-2.1 1.5-3.7 4-4.7V3.8C5.9 5.2 3.5 8.5 3.5 13v6.2H10V11Zm10.5 0h-3.9c.2-2.1 1.5-3.7 4-4.7V3.8c-4.2 1.4-6.6 4.7-6.6 9.2v6.2h6.5V11Z" />
                  </svg>
                </div>

                <span className="inet-review-slider-label">
                  CUSTOMER REVIEWS
                </span>
              </div>

              {/* SLIDER CONTENT */}
              <div className="inet-review-slider-window">
                <div
                  className="inet-review-slider-track"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {customerReviews.map((item, index) => (
                    <div
                      key={item.id}
                      className="inet-review-slide"
                      aria-hidden={currentIndex !== index}
                    >
                      <div
                        className="inet-review-slide-stars"
                        role="img"
                        aria-label={`${item.rating} out of 5 stars`}
                      >
                        {"★".repeat(item.rating)}
                        <span aria-hidden="true">
                          {"☆".repeat(5 - item.rating)}
                        </span>
                      </div>

                      <p className="inet-review-slide-text">
                        &ldquo;{item.review}&rdquo;
                      </p>

                      <div className="inet-review-slide-author">
                        <div
                          className="inet-review-avatar"
                          aria-hidden="true"
                        >
                          {item.name.charAt(0)}
                        </div>

                        <div className="inet-review-author-info">
                          <h3>{item.name}</h3>
                          <span>{item.designation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLIDER FOOTER */}
              <div className="inet-review-slider-footer">

                {/* PAGINATION DOTS */}
                <div
                  className="inet-review-slider-dots"
                  aria-label="Select a review"
                >
                  {customerReviews.map((item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`inet-review-dot ${
                        currentIndex === index
                          ? "active"
                          : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Show review ${index + 1}`}
                      aria-current={
                        currentIndex === index
                          ? "true"
                          : undefined
                      }
                    />
                  ))}
                </div>

                {/* PREV / NEXT ARROWS */}
                <div className="inet-review-slider-arrows">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="inet-review-arrow"
                    aria-label="Previous review"
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="inet-review-arrow"
                    aria-label="Next review"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

              </div>

              {/* SOURCE LINK */}
             

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
