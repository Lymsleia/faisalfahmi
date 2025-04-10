const validateField = (rules) => (value) => {
  return rules.every((rule) => rule(value));
};

const isNotEmpty = (value) => value.length > 0;
const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
const isMinLength = (min) => (value) => value.length >= min;

const validateEmail = validateField([isNotEmpty, isEmail]);
const validatePassword = validateField([isNotEmpty, isMinLength(6)]);

console.log(validateEmail("example@mail.com")); // true
console.log(validateEmail("")); // false
console.log(validateEmail("invalid-email")); // false

console.log(validatePassword("mypassword")); // true
console.log(validatePassword("123")); // false
