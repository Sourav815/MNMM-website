import React from "react";
import Hero from "../components/Coaching/Hero";
import Layout from "../components/Layout";

function coaching() {
  return (
    <Layout>
      <main className="bg-gray-800 text-white flex flex-col items-center">
        <Hero />
      </main>
    </Layout>
  );
}

export default coaching;
