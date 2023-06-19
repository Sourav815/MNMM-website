import React from "react";
import AthleteHighlight from "../components/Community/AthleteHighlight";
import Hero from "../components/Community/Hero";
import Liftoftheweek from "../components/Community/Liftoftheweek";
import Layout from "../components/Layout";

function community() {
  return (
    <Layout>
      <main className="bg-gray-800 text-white flex flex-col items-center min-h-screen">
        <Hero />
        <Liftoftheweek />
        <AthleteHighlight />
      </main>
    </Layout>
  );
}

export default community;
