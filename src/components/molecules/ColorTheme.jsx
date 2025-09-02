"use client";

import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import RadioItem from "./RadioItem";
import ButtonAtomComponent from "@/components/atoms/Button";
import colors from "@/static/colors";
import { themeState } from "@/components/states/themeState";

const ColorTheme = () => {
  const [theme, setTheme] = useAtom(themeState);
  const [value, setValue] = useState(theme);

  const setThemeValue = () => {
    setTheme(value);
  };

  useEffect(() => {
    setValue(theme);
  }, [theme]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        {colors.colors.map((item) => (
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
          onClick={() => setThemeValue()}
        />
      </div>
    </div>
  );
};

export default ColorTheme;
