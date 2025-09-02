import ForgotPasswordFormComponent from "@/components/forms/ForgotPassword";
const ForgotPassword = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="text-neutral-950 dark:text-white font-bold text-2xl">
          Forgotten your password?
        </div>
        <div className="text-neutral-600 dark:text-neutral-300 text-[14px] text-center md:text-start">
          Enter your email below, and we&apos;ll send you a link to reset it.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ForgotPasswordFormComponent />
      </div>
    </div>
  );
};

export default ForgotPassword;
