"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputAtomComponent from "../atoms/Input";
import ButtonAtomComponent from "../atoms/Button";
import { signUpSchema } from "@/app/validations/auth";

const SignUpFormComponent = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const validate = async () => {
    return await signUpSchema
      .validate(
        {
          email,
          password,
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
    router.push(`/auth`);
  };

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <InputAtomComponent
          label="Email Address"
          placeholder="email@example.com"
          type="email"
          onChange={setEmail}
          error={errors.email}
        />
        <InputAtomComponent
          label="Password"
          placeholder=""
          type="password"
          onChange={setPassword}
          error={errors.password}
        />
        <ButtonAtomComponent label="Sign up" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SignUpFormComponent;
