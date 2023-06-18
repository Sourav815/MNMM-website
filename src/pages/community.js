import { Link } from "gatsby";
import React from "react";
import FilledButton from "../components/FilledButton";
import Layout from "../components/Layout";

function community() {
  return (
    <Layout>
      <main className="bg-gray-800 text-white flex flex-col items-center min-h-screen">
        <h1 className="text-4xl font-extrabold py-20 text-center">
          COMMUNITY PAGE
        </h1>
        <img
          className="h-96 rounded-lg"
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        />
        {/* <div className="h-[40vh]" /> */}
        <FilledButton text="Join Now" link="#" color="bg-black my-10" />
      </main>
    </Layout>
  );
}

export default community;
