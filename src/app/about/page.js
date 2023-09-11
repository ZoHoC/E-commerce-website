import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/modules/Header/Header";
import React from "react";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default About;
