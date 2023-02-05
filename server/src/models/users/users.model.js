const users = require("./users.mongo");
const { genSalt, hash } = require("bcrypt");

async function signup(email, password) {
  const isEmailExist = await users.findOne({ email });

  if (isEmailExist) {
    throw Error("Email already in use");
  }

  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const user = await users.create({ email, password: hashedPassword });

  return user;
}

module.exports = { signup };
