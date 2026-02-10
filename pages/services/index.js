import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyleTwo from "../../components/Services/ServicesStyleTwo";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import WhatWeOffer from "../../components/Services/WhatWeOffer";
import Footer from "../../components/Layouts/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Our Technology Services | AzureRift Technologies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <ServicesStyleTwo />

      <MakeYourBusiness />

      <WhatWeOffer />

      <Footer />
    </>
  );
}
