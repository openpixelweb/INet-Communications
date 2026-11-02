
import React from "react";

import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import Footer from "../layout/footers/footer";

import ShopArea from "../components/shop/shop-area";

const ShopPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Shop - iNet Communications" />

      <HeaderOne />

      <main>
        
        <ShopArea />
      </main>

      <Footer />
    </Wrapper>
  );
};

export default ShopPage;
