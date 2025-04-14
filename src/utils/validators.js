export const regexValidators = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  name: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
  dob: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, // YYYY-MM-DD
  username: /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]{3,16}(?<![_.])$/,
  post: /^(?!\s*$).{1,280}$/,
  message: /^(?!\s*$).+/,
  prompt: /^(?!\s*$).+/,
  ageDate: {
    "dd/mm/yyyy": /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    "mm/dd/yyyy": /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
    "yyyy/mm/dd": /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/,
  },
};
