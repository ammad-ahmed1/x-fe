import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import Home from "../components/modules/home/Home";
import TabsUI from "../components/shared/TabsUI";
import SearchInputUI from "../components/ui/SearchInputUI";
import UserCard from "../components/shared/UserCard";
import { headerTabs } from "../data/ui-data";
import { posts } from "../data/users-data";

const Homepage = () => {
  const [dummyParam, setDummyParam] = useState("for-you");
  const searchUsersUrl = "https://dummyjson.com/user/search";

  const handleTabClick = (tab) => {
    setDummyParam(tab.value);
  };
  const Tabs = () => {
    return (
      <div className="w-full flex">
        {headerTabs.map((item) => (
          <TabsUI
            tab={item}
            onClick={handleTabClick}
            isActive={dummyParam == item?.value ? true : false}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      <Layout
        headerContent={<Tabs />}
        rightSidebarContent={
          <SearchInputUI
            url={searchUsersUrl}
            renderItem={(user) => <UserCard user={user} />}
          />
        }>
        <Home posts={posts} />
      </Layout>
    </>
  );
};

export default Homepage;
