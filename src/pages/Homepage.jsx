import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import { posts, profilesList, whatsHappening } from "../data/users-data";
import MainContent from "../components/modules/home/MainContent";
import RightSiderContent from "../components/modules/home/RightSiderContent";
import HeaderContent from "../components/modules/home/HeaderContent";
import ModalUI from "../components/ui/ModalUI";
import DatePickerUI from "../components/ui/DatePickerUI";
import TextFieldUI from "../components/ui/TextFieldUI";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [name, setName] = useState("");
  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <button onClick={handleShowModal}> Click me</button>
      {/* <DatePickerUI /> */}
      <Layout
        headerContent={<HeaderContent />}
        rightSidebarContent={<RightSiderContent />}>
        <MainContent posts={posts} />
        <button onClick={() => handleShowModal()}>Click me</button>
        <ModalUI
          isOpen={isShowModal}
          onClose={handleShowModal}
          size="large"
          title={"Create your account"}
          footer={
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => console.log("Tweet posted!")}>
              Tweet
            </button>
          }>
          <div className="flex flex-col justify-center items-center gap-4">
            {/* <textarea
              className="w-full p-2 border rounded"
              placeholder="What's happening?"
            /> */}
            <TextFieldUI
              fieldState={name}
              setFieldState={setName}
              disabled={false}
              readOnly={false}
              label="Phone, Email or Username"
              // maxChar={50}
              startIcon={<i className="fas fa-user"></i>}
              fullWidth
              size="xlg"
              className={" border-none outline-none"}
              rounded={false}
            />
            <TextFieldUI
              fieldState={name}
              setFieldState={setName}
              size="xlg"
              type="text"
              placeholder="Name"
            />
            <TextFieldUI
              fieldState={name}
              setFieldState={setName}
              size="xlg"
              type="text"
              placeholder="Name"
            />
            <TextFieldUI
              fieldState={name}
              setFieldState={setName}
              size="xlg"
              type="text"
              placeholder="Name"
            />
          </div>
        </ModalUI>
      </Layout>
    </>
  );
};

export default Homepage;
