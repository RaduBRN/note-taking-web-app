import ResetPasswordFormComponent from "@/components/forms/ResetPassword";

const ResetPassword = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="text-neutral-950 dark:text-white font-bold text-2xl">
          Reset your Password
        </div>
        <div className="text-neutral-600 dark:text-neutral-300 text-[14px] text-center md:text-start">
          Choose a new password to secure your account.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ResetPasswordFormComponent />
      </div>
    </div>
  );
};

export default ResetPassword;
