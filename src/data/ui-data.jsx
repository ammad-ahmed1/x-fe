import React from "react";
import {
  CommunitiesIcon,
  ExploreIcon,
  HomeIcon,
  MessagesIcon,
  NotificationsIcon,
  ProfileIcon,
  SettingsIcon,
} from "../assets/icons/SidebarIcons";

export const sidebarMenu = [
  { name: "Home", icon: <HomeIcon />, route: "/home" },
  {
    name: "Explore",
    icon: React.createElement(ExploreIcon),
    route: "/explore",
  },
  {
    name: "Notifications",
    icon: React.createElement(NotificationsIcon),
    route: "/notifications",
  },
  {
    name: "Messages",
    icon: React.createElement(MessagesIcon),
    route: "/messages",
  },
  {
    name: "Communities",
    icon: React.createElement(CommunitiesIcon),
    route: "/communities",
  },
  {
    name: "Profile",
    icon: React.createElement(ProfileIcon),
    route: "/profile",
  },
  {
    name: "Settings and Privacy",
    icon: React.createElement(SettingsIcon),
    route: "/settings-and-privacy",
  },
];
