import * as React from "react";
import AboutUs from "../components/Home/AboutUs";
import FAQ from "../components/Home/FAQ";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";
import Testimonials from "../components/Home/Testimonials";
import Features from "../components/Home/Features";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <main className="bg-gray-800 text-white flex flex-col items-center">
          <Hero />
          <Features />
          <Testimonials />
          <FAQ />
          <AboutUs />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
