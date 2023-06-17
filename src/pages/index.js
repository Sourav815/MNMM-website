import * as React from "react";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <main className="bg-gray-800 text-white flex flex-col items-center">
          <Hero />
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
