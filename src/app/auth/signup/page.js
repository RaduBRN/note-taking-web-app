import SignUpFormComponent from "@/components/forms/SignUp";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col gap-10 dark:text-white">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="text-neutral-950 dark:text-white font-bold text-2xl">
          Create Your Account
        </div>
        <div className="text-neutral-600 dark:text-neutral-300 text-[14px] text-center md:text-start">
          Sign Up to Start Organizing your Notes and Boost your Productivity.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <SignUpFormComponent />
        </div>
        <div className="text-[14px] text-neutral-600 dark:text-neutral-300 text-center">
          Already have an account?{" "}
          <span className="text-neutral-950 dark:text-white">
            <Link href="/auth">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
