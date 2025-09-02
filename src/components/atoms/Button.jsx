"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const ButtonAtomComponent = ({ icon, label, onClick, className, href }) => {
  const router = useRouter();
  const btnRef = useRef(null);

  const handleFocus = () => {
    btnRef.current.focus();
  };

  const navigate = (url) => {
    router.push(url);
  };

  return (
    <div className="relative flex flex-col gap-1" onClick={handleFocus}>
      <button
        className={`${className} flex items-center justify-center w-full bg-blue-500 hover:bg-blue-700 rounded-lg py-[10px] text-neutral-0 font-semibold focus:outline-neutral-500 focus:outline-3 focus:outline-offset-4 px-4`}
        onClick={() => (href ? navigate(href) : onClick())}
        ref={btnRef}
      >
        {icon ? <>{icon}</> : null}
        {label}
      </button>
    </div>
  );
};

export default ButtonAtomComponent;
