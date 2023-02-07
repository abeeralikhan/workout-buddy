const { isEmail, isStrongPassword } = require("validator");

const { createUser, getUser } = require("../../models/users/users.model");
const { createToken, comparePasswords } = require("../../modules/auth");

async function signupUser(req, res) {
  const { email, password } = req.body;

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

  const doesUserExist = await getUser(email);

  if (doesUserExist) {
    throw Error("Email already in use");
  }

  try {
    const user = await createUser(email, password);
    const token = createToken(user._id);

    res.status(200).send({ email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await getUser(email);

  if (!user) {
    throw Error("Incorrect email");
  }

  const isPasswordValid = comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw Error("Incorrect Password");
  }

  try {
    const token = createToken(user._id);

    res.status(200).send({ email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = {
  loginUser,
  signupUser,
};
