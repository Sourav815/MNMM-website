import React from "react";
import ContactUs from "../components/Coaching/ContactUs";
import Hero from "../components/Coaching/Hero";
import Services from "../components/Coaching/Services";
import Layout from "../components/Layout";

function coaching() {
  return (
    <Layout>
      <main className="bg-gray-800 text-white flex flex-col ">
        <Hero />
        <Services />
        <ContactUs />
      </main>
    </Layout>
  );
}

export default coaching;

export const Head = () => (
  <>
    <title>MNMM</title>
    <meta name="description" content="MNMM website" />
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
  </>
);
