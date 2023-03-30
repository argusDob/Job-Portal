export default function getFormsConfig() {
  const fields = {
    header: "Register and unlock more features",
    emailProps: {
      type: "email",
      format: "email",
      label: "Email address:",
      name: "email",
      minlength: 10,
      isValid: null,
      errorMessage: "Email is required",
      notEqualErrorMessage: "",
    },
    options: [
      {
        name: "candidate",
        label: "Candidate",
        value: "candidate",
      },
      {
        name: "hire_manager",
        label: "Hire Manager",
        value: "hire_manager",
      },
    ],
    confirmPasswordProps: [
      {
        type: "password",
        label: "Password:",
        name: "password",
        minlength: 10,
        isValid: null,
        errorMessage: "Password is required",
        notEqualErrorMessage: "",
      },
      {
        type: "password",
        label: "Confirm password:",
        name: "password1",
        minlength: 10,
        isValid: null,
        errorMessage: "Confirmation Password is required",
        notEqualErrorMessage: "Passwords do not match",
      },
    ],
  };

  return fields;
}
