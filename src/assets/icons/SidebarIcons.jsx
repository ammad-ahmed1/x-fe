import React from "react";

export const HomeIcon = ({ size = 24, color = "#e7e9ea", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    strokeWidth="2"
    {...props}>
    <path d="M3 9.5l9-7 9 7v10.5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6h-2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
  </svg>
);

export const ExploreIcon = ({ size = 24, color = "#e7e9ea", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    strokeWidth="2"
    {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M10 14l5-2.5L10 9v5zm1-8v3m0 7v3m3-7h3M7 12H4" />
  </svg>
);

export const NotificationsIcon = ({
  size = 24,
  color = "#e7e9ea",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    strokeWidth="2"
    {...props}>
    <path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2zm-6 6a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2z" />
  </svg>
);

export const MessagesIcon = ({ size = 24, color = "#e7e9ea", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    strokeWidth="2"
    {...props}>
    <path d="M21 12a9 9 0 1 1-9-9m0 3.5L7 8l3 5H6l4 5-2.5-1" />
  </svg>
);

export const CommunitiesIcon = ({ size = 24, color = "#e7e9ea", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    strokeWidth="2"
    {...props}>
    <circle cx="12" cy="8" r="4" />
    <circle cx="4" cy="12" r="2" />
    <circle cx="20" cy="12" r="2" />
    <path d="M4 15a9 9 0 0 1 16 0" />
  </svg>
);

export const ProfileIcon = ({ size = 24, color = "#e7e9ea", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    strokeWidth="2"
    {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20a9 9 0 0 1 16 0" />
  </svg>
);

export const SettingsIcon = ({ size = 24, color = "#e7e9ea", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    strokeWidth="2"
    {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m14.07-7.07L16.5 5.5M7.5 18.5l-1.57 1.57M18.5 16.5l1.57-1.57M5.5 7.5L4 6m7 2.92v3.5h3.5" />
  </svg>
);
