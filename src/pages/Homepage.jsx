import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import Home from "../components/modules/home/Home";
import TabsUI from "../components/shared/TabsUI";

const Homepage = () => {
  const [dummyParam, setDummyParam] = useState("for-you");

  const posts = [
    {
      user: {
        name: "Steve Schoger",
        username: "@SteveSchoger",
        profile_image:
          "https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg",
      },
      post: {
        date: "Jun 27",
        content:
          "🔥 If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative.",
        image: "https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png",
      },
      engagement: {
        comments: 33,
        retweets: 397,
        likes: 2600,
        shares: 0,
      },
    },
    {
      user: {
        name: "Justin Doe",
        username: "@Justin",
        profile_image: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      post: {
        date: "Aug 5",
        content:
          "Learning React is fun! 🚀 Just finished my first React project, and I'm excited to build more.",
        image:
          "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg",
      },
      engagement: {
        comments: 2,
        retweets: 39,
        likes: 50,
        shares: 4,
      },
    },
  ];
  const headerTabs = [
    {
      id: 1,
      name: "For You",
      route: "/home/for-you",
      value: "for-you",
    },
    {
      id: 2,
      name: "Following",
      route: "/home/following",
      value: "follow",
    },
  ];

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
      <Layout headerContent={<Tabs />} rightSidebarContent={null}>
        <Home posts={posts} />
      </Layout>
    </>
  );
};

export default Homepage;
