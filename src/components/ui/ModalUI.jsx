import React from "react";
import { X } from "lucide-react";

const ModalUI = () => {
  return (
    <div className="w-screen h-screen fixed inset-0  bg-black/50 z-50 flex justify-center items-center  ">
      <div className=" w-[450px] h-[375px] bg-black rounded-2xl">
        <div className="header flex p-4">
          <X className="w-6 h-6 text-gray-700 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ModalUI;
