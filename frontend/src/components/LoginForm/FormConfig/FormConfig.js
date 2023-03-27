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
  ];
  return fields;
}
