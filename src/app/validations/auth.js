import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Field is required."),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Field is required."),
  password: yup.string().required("Field is required."),
});

export const signUpSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Field is required."),
  password: yup.string().min(8).required("Field is required."),
});

export const resetPasswordSchema = (newPasswordValue) =>
  yup.object({
    newPassword: yup.string().min(8).required("Field is required."),
    confirmPassword: yup
      .string()
      .test(
        `confirm-password`,
        () => `Confirm password does not match`,
        (value) => value === newPasswordValue
      )
      .required("Field is required."),
  });
