import SettingsInfo from "@/components/molecules/SettingsInfo";
import ColorTheme from "@/components/molecules/ColorTheme";

const ColorThemePage = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-[75%]">
      <SettingsInfo
        label="Color Theme"
        description="Choose your color theme:"
      />
      <div>
        <ColorTheme />
      </div>
    </div>
  );
};

export default ColorThemePage;
