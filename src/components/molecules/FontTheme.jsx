"use client";

import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import RadioItem from "./RadioItem";
import ButtonAtomComponent from "@/components/atoms/Button";
import fonts from "@/static/fonts";
import { fontState } from "@/components/states/fontState";

const FontTheme = () => {
  const [font, setFont] = useAtom(fontState);
  const [value, setValue] = useState(font);

  const setFontValue = () => {
    setFont(value);
  };

  useEffect(() => {
    setValue(font);
  }, [font]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        {fonts.fonts.map((item) => (
          <RadioItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            description={item.description}
            value={item.value}
            selectedValue={value}
            setSelectedValue={setValue}
          />
        ))}
      </div>
      <div className="inline-flex justify-end">
        <ButtonAtomComponent
          label="Apply Changes"
          onClick={() => setFontValue()}
        />
      </div>
    </div>
  );
};

export default FontTheme;
