"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputAtomComponent from "@/components/atoms/Input";
import ButtonAtomComponent from "@/components/atoms/Button";
import { resetPasswordSchema } from "@/app/validations/auth";

const ResetPasswordFormComponent = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const validate = async () => {
    return await resetPasswordSchema(newPassword)
      .validate(
        {
          newPassword,
          confirmPassword,
        },
        { abortEarly: false }
      )
      .then(() => {
        setErrors({});
        return true;
      })
      .catch((err) => {
        let errors = [];

        err.inner.forEach((error) => {
          let key = error.path;
          let message = error.message;
          errors[key] = message;
        });

        setErrors(errors);

        return false;
      });
  };

  const handleSubmit = async () => {
    const validation = await validate();
    if (!validation) return;
    router.push(`/dashboard`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <InputAtomComponent
          label="New Password"
          placeholder=""
          type="password"
          onChange={setNewPassword}
          error={errors.newPassword}
        />
      </div>
      <div>
        <InputAtomComponent
          label="Confirm Password"
          placeholder=""
          type="password"
          onChange={setConfirmPassword}
          error={errors.confirmPassword}
        />
      </div>
      <div>
        <ButtonAtomComponent label="Reset Password" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ResetPasswordFormComponent;
