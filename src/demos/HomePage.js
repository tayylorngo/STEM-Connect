import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/WhoWeAre.js";
import Features2 from "components/features/HomePageValues";
import SliderCard from "components/cards/ThreeColSlider.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <Features2/>
    <SliderCard />
    <Footer />
  </AnimationRevealPage>
);