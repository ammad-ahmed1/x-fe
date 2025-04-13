import { useEffect } from "react";
import LogoIcon from "../../assets/icons/LogoIcon";

export default function Modal({
  isOpen,
  onClose,
  children,
  rightButton = null,
  title,
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-screen md:mx-4 md:rounded-2xl bg-black overflow-y-auto overflow-x-hidden shadow-lg transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 ">
          {/* Left - Close Button */}
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition"
          >
            ✖
          </button>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <LogoIcon size={24} />
          </div>

          {/* Right - Optional Button */}
          <div className="min-w-[40px] flex justify-end">
            {rightButton && (
              <button
                onClick={rightButton.onClick}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                {rightButton.label}
              </button>
            )}
          </div>
        </div>
        {title && (
          <div className="px-6 ">
            <h2 className="text-3xl my-4 font-bold text-white">{title}</h2>
          </div>
        )}
        {/* Modal Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
