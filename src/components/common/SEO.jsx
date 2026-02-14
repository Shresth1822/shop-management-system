import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords }) => {
  const siteTitle = "Hari Bhagwan Traders";
  const defaultDescription =
    "Your trusted shop for premium utensils and crockery in Bisauli. Quality products for your kitchen and dining needs.";
  const defaultKeywords =
    "utensils, crockery, kitchenware, bisauli, shop, hari bhagwan traders";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta
        property="og:title"
        content={title ? `${title} | ${siteTitle}` : siteTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
