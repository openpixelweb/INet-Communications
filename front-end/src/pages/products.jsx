
import React from "react";

import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import Footer from "../layout/footers/footer";

import ProductsBanner from "../components/products/products-banner";
import ProductsArea from "../components/products/products-area";

const ProductsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Products - iNet Communications" />

      <HeaderOne />

      <main>
        <ProductsBanner />
        <ProductsArea />
      </main>

      <Footer />
    </Wrapper>
  );
};

export default ProductsPage;
