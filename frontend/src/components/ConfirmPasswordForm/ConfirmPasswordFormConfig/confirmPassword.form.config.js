export default function getFormsConfig() {
  const fields = [
    {
      type: "password",
      label: "Password:",
      name: "Password",
      minlength: 10,
      isValid: null,
      errorMessage: "Password is required",
    },
    {
      type: "password",
      label: "Confirm password:",
      name: "Password1",
      minlength: 10,
      isValid: null,
      errorMessage: "Confirmation Password is required",
    },
  ];
  return fields;
}
