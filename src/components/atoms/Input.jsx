"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconShowPassword from "../icons/IconShowPassword";
import IconHidePassword from "../icons/IconHidePassword";

const InputAtomComponent = ({
  label,
  placeholder,
  type,
  link,
  linkText,
  onChange,
  error,
}) => {
  const [inputType, setInputType] = useState(type || "text");
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleInputChange = async (event) => {
    onChange(event.target.value);
  };

  const handlePasswordType = () => {
    if (inputType !== "password") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  return (
    <div className="relative flex flex-col gap-1" onClick={handleFocus}>
      <label className="dark:text-white">{label}</label>
      <div className="relative w-full group hover:cursor-pointer">
        <input
          className={`border dark:border-neutral-600 ${
            error
              ? "border-red-500 focus:border-red-500 focus:outline-none"
              : "focus:border-neutral-950 focus:outline-neutral-500 focus:dark:outline-neutral-950 focus:outline-2 focus:dark:outline-1 focus:outline-offset-4"
          } w-full h-full px-4 py-3 group-hover:cursor-pointer group-hover:bg-neutral-50 group-hover:dark:bg-neutral-800 rounded-lg dark:bg-neutral-950 dark:text-white`}
          ref={inputRef}
          placeholder={placeholder}
          onChange={handleInputChange}
          type={inputType}
        />
        {type === "password" ? (
          <button
            onClick={handlePasswordType}
            className="absolute top-[10px] right-2 dark:text-white"
          >
            {inputType === "password" ? (
              <IconShowPassword />
            ) : (
              <IconHidePassword />
            )}
          </button>
        ) : null}
      </div>
      {error ? <div className="text-xs text-red-500">{error}</div> : null}
      {link && linkText ? (
        <Link
          href={link}
          className="absolute top-1 right-0 text-xs text-neutral-600 underline dark:text-neutral-400"
        >
          {linkText}
        </Link>
      ) : null}
    </div>
  );
};

export default InputAtomComponent;
