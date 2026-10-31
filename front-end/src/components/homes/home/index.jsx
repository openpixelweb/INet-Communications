import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import ProductArea from "./product-area";
import SecuritySolutions from "./security-solutions";
import IndustryArea from "./industry-area";
import WhyChooseArea from "./why-choose-area";
import SliderArea from "./slider-area";
import TestimonialArea from "./testimonial-area";
// import BrandArea from "./brand-area";
import CtaArea from "./cta-area";
import CaseStudyArea from "./case-study-area";
import Footer from "@/src/layout/footers/footer";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <SliderArea />
      <AboutArea />
      <ProductArea />
      {/* NEW SMART SECURITY SOLUTIONS */}
<SecuritySolutions />
<IndustryArea />
<WhyChooseArea />
      
      <TestimonialArea />
      
      <CtaArea />
      <CaseStudyArea />
      <Footer />
    </>
  );
};

export default HomeOne;
