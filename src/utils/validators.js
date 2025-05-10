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

export const signupSchema = {
  user_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  user_psw:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  user_name: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
  user_dob: /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}$/, // MM-DD-YYYY
};
export const signinSchema = {
  user_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  user_psw:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};
export const signupErrorMessages = {
  user_email: "Please enter a valid email address (e.g., user@example.com).",
  user_psw:
    "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.",
  user_name:
    "Name should only contain letters and may include spaces, hyphens, or apostrophes.",
  user_dob: "Please enter a valid date of birth in MM-DD-YYYY format.",
};
export const signinErrorMessages = {
  user_email: "Please enter a valid email address (e.g., user@example.com).",
  user_psw:
    "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.",
};
