import React from "react";
import { X } from "lucide-react";
import LogoIcon from "../../assets/icons/LogoIcon";

const ModalUI = ({
  isOpen,
  onClose,
  size = "medium",
  header,
  title,
  children,
  footer,
  clickOutsideToClose = true,
  overlay = true,
  animation = "fade",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (clickOutsideToClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // overlay div
    // bg-black/50
    <div
<<<<<<< HEAD
      className="w-screen h-screen fixed inset-0  bg-black/50 z-50 flex justify-center items-center  "
      onClick={handleOverlayClick}>
      <div
        className={`modal-container w-full h-full flex justify-center items-center ${
          size === "fullscreen" ? "w-full h-full" : "w-3/4 max-w-2xl mx-auto"
        }`}>
        <div className="w-[100%] bg-black rounded-2xl relative p-4">
=======
      className="w-[100%] h-screen fixed inset-0  bg-white/50 z-50 flex justify-center items-center  "
      onClick={handleOverlayClick}>
      {/* modal container */}
      <div
        className={`modal-container flex justify-center items-center ${
          size === "large" ? "w-[70%] " : "w-3/4 max-w-2xl mx-auto"
        }`}>
        {/* modal div */}
        <div
          className={`bg-black rounded-2xl relative p-4 ${
            size == "large" ? "w-[60%] h-full" : "w-3/4 max-w-2xl mx-auto"
          }`}>
>>>>>>> 6cb7bd90ab2fcda33f1f700f8f7f4ae4e4bf6957
          {/* Header */}
          <div className="modal-header flex w-full justify-between items-center">
            <div>
              <X
                className="w-6 h-6 text-gray-700 text-white cursor-pointer"
                onClick={onClose}
              />
            </div>
            <div>
              <LogoIcon aria-label="App Logo" className="w-8 h-8" />
            </div>
            <div>button</div>
          </div>
          <div className="my-12 text-3xl font-extrabold px-8">{title}</div>
          {/* Body */}
          <div className="modal-body mt-4">{children}</div>

          {/* Footer */}
          <div className="modal-footer flex justify-end mt-4">{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalUI;
