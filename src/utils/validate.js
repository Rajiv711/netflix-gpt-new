// Helper validation functions
const validateEmail = (email) => {
  const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return emailRegex.test(email) ? null : "Email ID is not valid";
};

const validatePassword = (password) => {
  const passRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  return passRegex.test(password) ? null : "Password is not valid";
};

const validateName = (name) => {
  const nameRegex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  return nameRegex.test(name) ? null : "Name is not valid";
};

// Sign-in form validation
export const checkValidateDataSignInForm = (email, password) => {
  return validateEmail(email) || validatePassword(password);
};

// Sign-up form validation
export const checkValidateDataSignUpForm = (name, email, password) => {
  return validateName(name) || validateEmail(email) || validatePassword(password);
};
