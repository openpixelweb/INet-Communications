
import React from "react";

import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import Footer from "../layout/footers/footer";

import SolutionsBanner from "../components/solutions/solutions-banner";
import SolutionsArea from "../components/solutions/solutions-area";

const SolutionsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Security Solutions - iNet Communications" />

      <HeaderOne />

      <main>
        <SolutionsBanner />
        <SolutionsArea />
      </main>

      <Footer />
    </Wrapper>
  );
};

export default SolutionsPage;
