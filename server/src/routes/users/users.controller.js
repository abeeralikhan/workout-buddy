const { signup } = require("../../models/users/users.model");

async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await signup(email, password);

    res.status(200).send({ email, user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function loginUser(req, res) {
  res.send({ msg: "signup user" });
}

module.exports = {
  loginUser,
  signupUser,
};
