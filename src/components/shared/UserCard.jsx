import React from "react";

const UserCard = ({ user }) => {
  const fallbackAvatar = "/imgs/user-placeholder.png";
  return (
    <div className="flex items-center justify-between p-4 cursor-pointer ">
      <div className="flex items-center space-x-3">
        <img
          src={user?.avatar || fallbackAvatar}
          alt={user?.username}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">
            {user?.firstName + " " + user?.lastName}
          </span>
          <span className="text-sm text-gray-500">@{user?.username}</span>
          <p className="text-sm text-gray-600 mt-1">{user?.bio}</p>
        </div>
      </div>
      {/* <button className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-200">
        Follow
      </button> */}
    </div>
  );
};

export default UserCard;
