import LoginFormComponent from "@/components/forms/Login";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-10 dark:text-white">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="text-neutral-950 dark:text-white font-bold text-2xl">
          Welcome to Note
        </div>
        <div className="text-neutral-600 dark:text-neutral-300 text-[14px]">
          Please log in to continue
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <LoginFormComponent />
        <div className="text-[14px] text-neutral-600 dark:text-neutral-300 text-center">
          No account yet?{" "}
          <span className="text-neutral-950 dark:text-white">
            <Link href="/auth/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
