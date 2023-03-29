export default function getFormsConfig() {
  const fields = {
    emailProps: {
      type: "email",
      format: "email",
      label: "Email address:",
      name: "email",
      minlength: 10,
      isValid: null,
      errorMessage: "Email is required",
    },
    confirmPasswordProps: [
      {
        type: "password",
        label: "Password:",
        name: "password",
        minlength: 10,
        isValid: null,
        errorMessage: "Password is required",
      },
      {
        type: "password",
        label: "Confirm password:",
        name: "password1",
        minlength: 10,
        isValid: null,
        errorMessage: "Confirmation Password is required",
      },
    ],
  };

  return fields;
}
