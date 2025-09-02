const SettingsInfo = ({ label, description }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-base dark:text-white font-semibold">{label}</div>
      <div className="text-sm dark:text-neutral-300">{description}</div>
    </div>
  );
};

export default SettingsInfo;
