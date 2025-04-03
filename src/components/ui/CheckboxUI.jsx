// components/ui/Checkbox.js
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Checkbox = forwardRef((props, ref) => {
  const {
    id,
    name,
    label,
    className = "",
    labelClassName = "",
    containerClassName = "",
    error,
    ...rest
  } = props;

  const baseClasses = twMerge(
    "h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500",
    className
  );

  return (
    <div className={twMerge("flex items-start", containerClassName)}>
      <div className="flex h-5 items-center">
        <input
          id={id || name}
          name={name}
          type="checkbox"
          ref={ref}
          className={baseClasses}
          {...rest}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label
            htmlFor={id || name}
            className={twMerge("font-medium text-gray-700", labelClassName)}>
            {label}
          </label>
          {error && (
            <p className="mt-1 text-sm text-red-600" id={`${id || name}-error`}>
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
