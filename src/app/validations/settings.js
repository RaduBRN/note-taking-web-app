import * as yup from "yup";

export const changePasswordSchema = (oldPassword, newPasswordValue) =>
  yup.object({
    oldPassword: yup.string().required("Field is required."),
    newPassword: yup
      .string()
      .min(6)
      .test(
        `old-password`,
        () => `New password matches old password`,
        (value) => value !== oldPassword
      )
      .required("Field is required."),
    confirmPassword: yup
      .string()
      .test(
        `confirm-password`,
        () => `Confirm password does not match`,
        (value) => value === newPasswordValue
      )
      .required("Field is required."),
  });
