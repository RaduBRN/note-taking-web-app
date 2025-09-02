"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import InputAtomComponent from "@/components/atoms/Input";
import ButtonAtomComponent from "@/components/atoms/Button";
import { forgotPasswordSchema } from "@/app/validations/auth";

const ForgotPasswordFormComponent = () => {
  const [errors, setErrors] = useState({});

  const [email, setEmail] = useState("");

  const router = useRouter();

  const validate = async () => {
    return await forgotPasswordSchema
      .validate(
        {
          email,
        },
        { abortEarly: false }
      )
      .then(() => {
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
    router.push(`/auth/reset-password`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <InputAtomComponent
          label="Email Address"
          placeholder="email@example.com"
          type="email"
          onChange={setEmail}
          error={errors?.email}
        />
      </div>
      <div>
        <ButtonAtomComponent label="Send Reset Link" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ForgotPasswordFormComponent;
