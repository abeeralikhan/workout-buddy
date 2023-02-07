const users = require("./users.mongo");
const { hashPassword } = require("../../modules/auth");

async function createUser(email, password) {
  const hashedPassword = await hashPassword(password);
  const user = await users.create({ email, password: hashedPassword });

  return user;
}

async function getUser(email) {
  return await users.findOne({ email });
}

module.exports = { createUser, getUser };
