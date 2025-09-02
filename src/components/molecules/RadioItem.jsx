const RadioItem = ({
  icon,
  label,
  description,
  value,
  selectedValue,
  setSelectedValue,
}) => {
  const isSelected = value === selectedValue;
  return (
    <button
      className={`flex w-full items-center gap-1 py-4 rounded-xl border border-neutral-200 dark:border-neutral-800 ${
        isSelected
          ? "bg-neutral-100 dark:bg-neutral-800"
          : "dark:bg-neutral-950"
      } hover:bg-neutral-50 hover:dark:bg-neutral-800`}
      onClick={() => setSelectedValue(value)}
    >
      <div className="py-2 px-2 bg-white dark:bg-neutral-950 rounded-xl mx-4 border border-neutral-200 dark:border-neutral-800 dark:text-white">
        {icon}
      </div>
      <div className="flex flex-col items-start grow">
        <div className="dark:text-white">{label}</div>
        <div className="dark:text-neutral-300">{description}</div>
      </div>
      <div className="px-4">
        <div
          className={`w-4 h-4 rounded-full ${
            isSelected
              ? "border-4 border-blue-500"
              : "border-2 border-neutral-200 dark:border-neutral-800"
          } bg-white dark:bg-neutral-950`}
        />
      </div>
    </button>
  );
};

export default RadioItem;
