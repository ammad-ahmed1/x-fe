import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import { posts, profilesList, whatsHappening } from "../data/users-data";
import MainContent from "../components/modules/home/MainContent";
import RightSiderContent from "../components/modules/home/RightSiderContent";
import HeaderContent from "../components/modules/home/HeaderContent";

const Homepage = () => {
  return (
    <>
      <Layout
        headerContent={<HeaderContent />}
        rightSidebarContent={<RightSiderContent />}>
        <MainContent posts={posts} />
      </Layout>
    </>
  );
};

export default Homepage;
