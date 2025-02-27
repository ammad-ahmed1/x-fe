import React, { useRef, useState } from "react";

const TextField = ({
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
  const inputRef = useRef(null);
  const activeFieldClass = "text-sm -translate-y-3";
  const inActiveFieldClass = "text-lg translate-y-0";
  const [labelClass, setLabelClass] = useState(inActiveFieldClass);
  const handleChange = (val) => {
    setFieldState(val);
  };

  return (
    <div
      style={{ width: '400px', height: '65px' }}
      className="relative p-4 w-fit inline-flex items-center  border border-[rgb(51,54,57)] focus-within:border-blue-500 border p-4 hover:cursor-text"
      onClick={() => {
        inputRef.current.focus();
      }}>
      <label
        htmlFor="input-field"
        className={`transition-all duration-300 ${labelClass}`}>
        {label && label}
      </label>
      {startIcon && startIcon}
      <input
        className={`absolute left-0 ${className} border border-red mt-4 ml-2`}
        ref={inputRef}
        onFocusCapture={() => setLabelClass(activeFieldClass)}
        onBlurCapture={() => {
          if (fieldState?.length == 0) {
            setLabelClass(inActiveFieldClass);
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

export default TextField;
