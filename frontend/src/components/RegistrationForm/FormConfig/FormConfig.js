export default function getFormsConfig() {
  const fields = [
    {
      type: "email",
      format: "email",
      label: "Email address:",
      name: "email",
    },
    {
      type: "password",
      minLength: 6,
      label: "Password:",
      name: "Password",
    },
    {
      type: "password",
      minLength: 6,
      label: "Confirm password:",
      name: "Password1",
    },
  ];
  return fields;
}
