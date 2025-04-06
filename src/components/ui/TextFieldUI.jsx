import React, { useCallback, useMemo, useRef, useState } from "react";

const TextFieldUI = ({
  fieldState,
  setFieldState,
  type,
  placeholder,
  label,
  errorMsg,
  setErrorMsg,
  disabled,
  readOnly,
  validation,
  startIcon,
  endIcon,
  fullWidth,
  size,
  className,
  onChange,
  maxChar,
  minChar,
  rounded,
}) => {
  const sizeStyles = useMemo(
    () => ({
      xs: { width: "150px", height: "50px" },
      sm: { width: "200px", height: "40px" }, // Small size
      md: { width: "300px", height: "45px" }, // Medium (default)
      lg: { width: "400px", height: "50px" }, // Large size
      xlg: { width: "450px", height: "50px" }, // Large size
    }),
    []
  );
  const inputRef = useRef(null);
  const activeFieldClass = "text-xs -translate-y-3 ml-1 text-blue-500";
  const inActiveFieldClass = "text-md translate-y-0 ml-2 text-gray-500";
  const filledFieldClass = "text-xs -translate-y-3 ml-1 text-gray-500";
  const [labelClass, setLabelClass] = useState(inActiveFieldClass);
  const handleChange = useCallback(
    (val) => {
      setFieldState(val);
    },
    [setFieldState]
  );
  const handleFocus = useCallback((e) => {
    e.target.previousSibling.classList.add("top-2", "text-sm", "text-blue-500");
  }, []);

  const handleBlur = useCallback((e) => {
    if (e.target.value === "") {
      e.target.previousSibling.classList.remove(
        "top-2",
        "text-sm",
        "text-blue-500"
      );
    } else {
      e.target.previousSibling.classList.remove("text-blue-500");
    }
  }, []);

  return (
    <div
      style={sizeStyles[size]}
      className={`relative p-0 w-fit inline-flex items-center border border-[rgb(51,54,57)] focus-within:border-blue-500 border hover:cursor-text ${
        rounded && rounded
      }`}
      onClick={() => {
        inputRef.current.focus();
      }}>
      {label && (
        <label
          htmlFor="input-field"
          className={`transition-all duration-300 ${labelClass} `}>
          {label}
        </label>
      )}
      {startIcon && startIcon}
      <input
        className={`absolute left-0 ${className} ${label && "mt-4"} ml-2`}
        ref={inputRef}
        onFocusCapture={() => setLabelClass(activeFieldClass)}
        onBlurCapture={() => {
          if (fieldState?.length == 0) {
            setLabelClass(inActiveFieldClass);
          } else {
            setLabelClass(filledFieldClass);
          }
        }}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={fieldState}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={maxChar}
        minLength={minChar}
        onFocus={(e) =>
          e.target.previousSibling.classList.add(
            "top-2",
            "text-sm",
            "text-blue-500"
          )
        }
        onBlur={(e) =>
          e.target.value === "" &&
          e.target.previousSibling.classList.remove(
            "top-2",
            "text-sm",
            "text-blue-500"
          )
        }
      />
      {endIcon && endIcon}
      {errorMsg && (
        <span id="error-message" className="text-red-500">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default TextFieldUI;
