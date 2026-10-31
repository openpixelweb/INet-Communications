
import HeaderOne from "@/src/layout/headers/header";
import React from "react"; 
import AboutBanner from "@/src/components/about/about-banner";
import WhoWeAre from "@/src/components/about/who-we-are";
import VisionMission from "@/src/components/about/vision-mission";
import WhatWeDo from "@/src/components/about/what-we-do";
import CoreValues from "@/src/components/about/core-values";
import WhyChooseAbout from "@/src/components/about/why-choose-about";
import AboutContactCta from "@/src/components/about/about-contact-cta";

import Footer from "@/src/layout/footers/footer";

const About = () => {
  return (
    <>
      <HeaderOne />
      <AboutBanner />
      <WhoWeAre />  
      <VisionMission />
      <WhatWeDo />
     
      <AboutContactCta />
     
      <Footer />
    </>
  );
};

export default About; 
