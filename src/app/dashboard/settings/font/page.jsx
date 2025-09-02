import SettingsInfo from "@/components/molecules/SettingsInfo";
import FontTheme from "@/components/molecules/FontTheme";

const FontThemePage = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-[75%]">
      <SettingsInfo label="Font Theme" description="Choose your font theme:" />
      <div>
        <FontTheme />
      </div>
    </div>
  );
};

export default FontThemePage;
