import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} - CCTV Cameras & Security Solutions`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Discover CCTV cameras, surveillance systems, DVR/NVR, access control, networking products, and reliable security solutions for every industry at iNet Communications." />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
