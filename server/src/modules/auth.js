const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function comparePasswords(password, hash) {
  return bcrypt.compare(password, hash);
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

function createToken(_id) {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "2d" });
}

module.exports = {
  comparePasswords,
  hashPassword,
  createToken,
};
