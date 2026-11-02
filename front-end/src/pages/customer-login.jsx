
import React from "react";

import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import Footer from "../layout/footers/footer";

import CustomerLoginArea from "../components/customer-login/customer-login-area";

const CustomerLoginPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Customer Login - iNet Communications" />

      <HeaderOne />

      <main>
        <CustomerLoginArea />
      </main>

      <Footer />
    </Wrapper>
  );
};

export default CustomerLoginPage;
