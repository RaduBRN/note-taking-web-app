import ButtonAtomComponent from "../atoms/Button";

const SaveNoteMolecule = () => {
  return (
    <div className="flex gap-5 items-center pb-20 lg:pb-0">
      <ButtonAtomComponent
        label="Save Note"
        className="text-white !justify-start gap-2 text-sm"
      />
      <ButtonAtomComponent
        label="Cancel"
        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-white !justify-start gap-2 text-sm"
      />
    </div>
  );
};

export default SaveNoteMolecule;
