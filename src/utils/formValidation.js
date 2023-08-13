const name_validation = {
  fieldName: "firstName",
  type: "text",
  autoComplete: "off",
  placeholder: "First Name",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

const lastName_validation = {
  fieldName: "lastName",
  type: "text",
  autoComplete: "off",
  placeholder: "Last Name",
  validation: {
    required: "required",
  },
};

const email_validation = {
  fieldName: "email",
  type: "email",
  autoComplete: "off",
  placeholder: "Email",
  validation: {
    required: "required",
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
  },
};

const password_validation = {
  fieldName: "password",
  type: "password",
  autoComplete: "off",
  placeholder: "Password",
  validation: {
    required: "required",
  },
};

const confirm_password_validation = {
  fieldName: "confirm_password",
  type: "password",
  autoComplete: "off",
  placeholder: "Confirm Password",
  validation: {
    required: "required",
  },
};

export {
  name_validation,
  lastName_validation,
  email_validation,
  password_validation,
  confirm_password_validation,
};
