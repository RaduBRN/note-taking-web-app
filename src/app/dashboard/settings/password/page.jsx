import SettingsInfo from "@/components/molecules/SettingsInfo";
import Password from "@/components/molecules/Password";

const PasswordPage = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-[75%]">
      <SettingsInfo label="Change Password" />
      <div>
        <Password />
      </div>
    </div>
  );
};

export default PasswordPage;
