import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import { posts, profilesList, whatsHappening } from "../data/users-data";
import MainContent from "../components/modules/home/MainContent";
import RightSiderContent from "../components/modules/home/RightSiderContent";
import HeaderContent from "../components/modules/home/HeaderContent";
import ModalUI from "../components/ui/ModalUI";

const Homepage = () => {
  useState();
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <button onClick={handleShowModal}> Click me</button>
      <Layout
        headerContent={<HeaderContent />}
        rightSidebarContent={<RightSiderContent />}
      >
        <MainContent posts={posts} />
        <button>Click me</button>
        {isShowModal && <ModalUI />}
      </Layout>
    </>
  );
};

export default Homepage;
