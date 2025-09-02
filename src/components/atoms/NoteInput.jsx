"use client";
import { useState } from "react";

const NoteInput = ({ className, value, placeholder }) => {
  const [input, setInput] = useState(value);
  return (
    <input
      className={className}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default NoteInput;
