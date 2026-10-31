
import React from "react";
import SEO from "@/src/common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";

import CaseStudyBanner from "@/src/components/case-study/case-study-banner";
import CaseStudyArea from "../components/case-study/case-study-area";

const CaseStudiesPage = () => {
  return (
    <>
      <SEO pageTitle="Case Studies - iNet Communications" />

      <HeaderOne />

      <main>
        <CaseStudyBanner />
        <CaseStudyArea />

      </main>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;
