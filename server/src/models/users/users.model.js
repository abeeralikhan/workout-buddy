const users = require("./users.mongo");
const { genSalt, hash } = require("bcrypt");
const { isEmail, isStrongPassword } = require("validator");

async function signup(email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!isEmail(email)) {
    throw Error("Email is invalid");
  }

  if (!isStrongPassword(password)) {
    throw Error("Password is weak");
  }

  const isEmailExist = await users.findOne({ email });

  if (isEmailExist) {
    throw Error("Email already in use");
  }

  // securing the password
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const user = await users.create({ email, password: hashedPassword });

  return user;
}

module.exports = { signup };
