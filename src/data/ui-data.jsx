import React from "react";
import {
  Home,
  Search,
  MessageCircle,
  Bell,
  Users,
  User,
  Settings,
} from "lucide-react";

export const sidebarMenu = [
  { name: "Home", icon: <Home size={24} />, route: "/home" },
  {
    name: "Explore",
    icon: <Search size={24} />,
    route: "/explore",
  },
  {
    name: "Notifications",
    icon: <Bell size={24} />,
    route: "/notifications",
  },
  {
    name: "Messages",
    icon: <MessageCircle size={24} />,
    route: "/messages",
  },
  {
    name: "Communities",
    icon: <Users size={24} />,
    route: "/communities",
  },
  {
    name: "Profile",
    icon: <User size={24} />,
    route: "/profile",
  },
  {
    name: "Settings and Privacy",
    icon: <Settings size={24} />,
    route: "/settings-and-privacy",
  },
];
export const headerTabs = [
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
