
import React from "react";
import Head from "next/head";
import IndustriesBanner from "@/src/components/industries/industries-banner";
import IndustriesArea from "@/src/components/industries/industries-area";

// Use the same Header and Footer imports as your
// existing About or Contact page.
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";

const IndustriesPage = () => {
  return (
    <>
      <Head>
        <title>
          Industries We Serve | iNet Communications
        </title>

        <meta
          name="description"
          content="Explore CCTV surveillance, access control, video recording, and security networking technologies for corporate, industrial, retail, healthcare, education, hospitality, warehouse, and residential environments."
        />
      </Head>

      <HeaderOne />
      <IndustriesBanner />

      <IndustriesArea />

      <Footer />
    </>
  );
};

export default IndustriesPage;
