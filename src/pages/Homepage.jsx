import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import { posts, profilesList, whatsHappening } from "../data/users-data";
import MainContent from "../components/modules/home/MainContent";
import RightSiderContent from "../components/modules/home/RightSiderContent";
import HeaderContent from "../components/modules/home/HeaderContent";
import ModalUI from "../components/ui/ModalUI";

const Homepage = () => {
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
        <button onClick={() => handleShowModal()}>Click me</button>
        <ModalUI
          isOpen={isShowModal}
          onClose={handleShowModal}
          header="Create a New Tweet"
          body={
            <textarea
              className="w-full p-2 border rounded"
              placeholder="What's happening?"
            />
          }
          footer={
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => console.log("Tweet posted!")}
            >
              Tweet
            </button>
          }
        />
      </Layout>
    </>
  );
};

export default Homepage;
