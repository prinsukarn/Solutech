import React from "react";
import Appdownload from "../Components/Appdownload";
import Hero from "../Components/Hero";
import PartnerBanks from "../Components/PartnerBanks";
import PartnerCarousel from "../Components/PartnerCarousel";
import Services from "../Components/Services.js";
import Testimonial from "../Components/Testimonial";
import Whyus from "../Components/Whyus";

function Home(props) {
  return (
    <div>
      <Hero />
      <Appdownload />
      <Services />
      <Whyus />
      <Testimonial />
      <PartnerBanks />
      <PartnerCarousel />
    </div>
  );
}

export default Home;
