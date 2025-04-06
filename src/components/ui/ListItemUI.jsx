import React from "react";

const ListItemUI = ({ item }) => {
  return (
    <div className="px-3 my-2 hover:bg-[#1D1F23] transition duration-200 cursor-pointer">
      {item.img ? (
        <div className="flex gap-3 py-2 ">
          <img
            src={item.img}
            alt={item.title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            {item.category && (
              <span className="text-[#71767B] text-sm">{item.category}</span>
            )}
            <span className="font-bold text-white block mt-1">
              {item.title}
            </span>
            {item.tweets && (
              <span className="text-[#71767B] text-sm">{item.tweets}</span>
            )}
          </div>
        </div>
      ) : (
        <>
          {item.category && (
            <span className="text-[#71767B] text-sm">{item.category}</span>
          )}
          <span className="font-bold text-white block">{item.title}</span>
          {item.tweets && (
            <span className="text-[#71767B] text-sm">{item.tweets}</span>
          )}
        </>
      )}
    </div>
  );
};

export default ListItemUI;
