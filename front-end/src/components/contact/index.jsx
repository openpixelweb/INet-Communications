
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ContactBanner from "@/src/components/contact/contact-banner";
import ContactArea from "./contact-area";
import ContactInfo from "./contact-info";
import Footer from "@/src/layout/footers/footer";

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <ContactBanner />
      <ContactInfo />
      <ContactArea />
      <Footer />
    </>
  );
};

export default Contact;
