import React from "react";
import AtheletePage from "../components/Community/AtheletePage";
import Layout from "../components/Layout";
function athelete() {
  return (
    <div>
      <Layout>
        <AtheletePage />
      </Layout>
    </div>
  );
}

export default athelete;

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
