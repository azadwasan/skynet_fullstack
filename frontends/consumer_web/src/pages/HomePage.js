import React, { useState } from "react";
import AboutsUs from "../components/AboutsUs";
import Banner from "../components/Banner";
import ExploreMarket from "../components/ExploreMarket";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularServices from "../components/PopularServices";
import PosterHome from "../components/PosterHome";
import TopService from "../components/TopService";

function HomePage() {
  return (
    <div className="homepage">
      <div
        className="banner-div head_margin"
        style={{ background: "url(assets/banner.png)" }}
      >
        <Banner />
      </div>
      <ExploreMarket />

      <PopularServices />
      <TopService />
      <PosterHome />
      <AboutsUs />
    </div>
  );
}

export default HomePage;
