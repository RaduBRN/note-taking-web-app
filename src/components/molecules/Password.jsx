"use client";

import { useState } from "react";
import ButtonAtomComponent from "../atoms/Button";
import InputAtomComponent from "../atoms/Input";
import { changePasswordSchema } from "@/app/validations/settings";

const Password = () => {
  const [errors, setErrors] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = async () => {
    return await changePasswordSchema(oldPassword, newPassword)
      .validate(
        {
          oldPassword,
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

  const validateAndSave = async () => {
    const validation = await validate();
    if (!validation) return;
    console.log("123");
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <InputAtomComponent
          label="Old Password"
          placeholder=""
          type="password"
          onChange={setOldPassword}
          error={errors.oldPassword}
        />
        <InputAtomComponent
          label="New Password"
          placeholder=""
          type="password"
          onChange={setNewPassword}
          error={errors.newPassword}
        />
        <InputAtomComponent
          label="Confirm Password"
          placeholder=""
          type="password"
          onChange={setConfirmPassword}
          error={errors.confirmPassword}
        />
      </div>
      <div className="inline-flex justify-end">
        <ButtonAtomComponent
          label="Save Password"
          onClick={() => validateAndSave()}
        />
      </div>
    </div>
  );
};

export default Password;
