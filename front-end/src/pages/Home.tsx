import React from "react";
import { Layout } from "../layouts";
import { Showcase, MenWomen, BestSeller } from "../components";

const Home: React.FC<{}> = () => {
  return (
    <Layout>
      <Showcase />
      <MenWomen />
      <BestSeller />
    </Layout>
  );
};

export default Home;
