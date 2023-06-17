import * as React from "react";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-800 text-white">
        <Hero />
        <Testimonials />
        <FAQ />
        <AboutUs />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
