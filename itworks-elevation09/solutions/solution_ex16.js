// The following exercise contains the following subjects:
// ● Ternaries
// ● Logical operators
// Instructions
// Create a simple password validation function that takes a
// password string as an argument.
// If the length of the password is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.
// 1. Create a function that uses an if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression.

const checkValidPassword = (password = "") => {
  if (password.length < 7) {
    return "Weak";
  } else if (password.length > 7) {
    return "Strong";
  }
};
