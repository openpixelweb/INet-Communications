
import React from "react";
import Link from "next/link";
import SocialLinks from "@/src/common/social-links";

const footer_content = {
  company_name: "iNet Communications",

  about_des:
    "Your trusted partner for CCTV surveillance, access control, networking and modern security technologies. Delivering reliable products and practical security solutions for businesses and industries.",

  quick_links: [
    { title: "Home", link: "#" },
    { title: "About Us", link: "#" },
    { title: "Products", link: "#" },
    { title: "Solutions", link: "#" },
    { title: "Industries", link: "#" },
    { title: "Contact Us", link: "#" },
  ],

  product_links: [
    { title: "CCTV Cameras", link: "#" },
    { title: "IP & Network Cameras", link: "#" },
    { title: "DVR & NVR Systems", link: "#" },
    { title: "Access Control", link: "#" },
    { title: "Networking Products", link: "#" },
    { title: "Security Accessories", link: "#" },
  ],
};

const Footer = ({ style_2 }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`inet-footer ${style_2 ? "inet-footer-light" : ""}`}>

      {/* FOOTER MAIN */}
      <div className="inet-footer-main">
        <div className="container">
          <div className="row gy-5">

            {/* COLUMN 1 - COMPANY */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="inet-footer-about">

                <Link
                  href="#"
                  className="inet-footer-logo"
                  aria-label="iNet Communications - Home"
                >
                  <img
                    src="/assets/img/logo-footer.png"
                    alt="iNet Communications Logo"
                    className="inet-footer-logo-img"
                    width="200"
                    height="70"
                  />
                </Link>

                <p className="inet-footer-description">
                  {footer_content.about_des}
                </p>

                <div className="inet-footer-company-tag">
                  <span className="inet-footer-tag-icon">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <span>
                    Smarter Surveillance.
                    <br />
                    Stronger Security.
                  </span>
                </div>

                <div className="inet-footer-social">
                  <SocialLinks />
                </div>

              </div>
            </div>

            {/* COLUMN 2 - QUICK LINKS */}
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div className="inet-footer-widget">

                <h3 className="inet-footer-title">
                  Quick Links
                </h3>

                <ul className="inet-footer-links">
                  {footer_content.quick_links.map((item, index) => (
                    <li key={`${item.title}-${index}`}>
                      <Link href={item.link}>
                        <span className="inet-footer-link-arrow">
                          ›
                        </span>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            {/* COLUMN 3 - PRODUCTS */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="inet-footer-widget">

                <h3 className="inet-footer-title">
                  Our Products
                </h3>

                <ul className="inet-footer-links">
                  {footer_content.product_links.map((item, index) => (
                    <li key={`${item.title}-${index}`}>
                      <Link href={item.link}>
                        <span className="inet-footer-link-arrow">
                          ›
                        </span>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            {/* COLUMN 4 - CONTACT */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="inet-footer-widget inet-footer-contact">

                <h3 className="inet-footer-title">
                  Get In Touch
                </h3>

                <p className="inet-footer-contact-intro">
                  Have a security requirement or product
                  enquiry? Our team is here to help.
                </p>

                <div className="inet-footer-contact-item">
                  <span className="inet-footer-contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>

                  <div>
                    <h4>Our Location</h4>
                    <p>
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="inet-footer-contact-item">
                  <span className="inet-footer-contact-icon">
                    <i className="fas fa-envelope"></i>
                  </span>

                  <div>
                    <h4>Enquiries</h4>
                    <Link href="#">
                      Send an Enquiry
                    </Link>
                  </div>
                </div>

                <Link
                  href="#"
                  className="inet-footer-contact-btn"
                >
                  Get In Touch
                  <span aria-hidden="true">↗</span>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="inet-footer-bottom">
        <div className="container">
          <div className="inet-footer-bottom-inner">

            <p>
              © {currentYear} iNet Communications.
              All Rights Reserved.
            </p>

            <div className="inet-footer-bottom-links">
              <Link href="#">
                Privacy Policy
              </Link>

              <Link href="#">
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
