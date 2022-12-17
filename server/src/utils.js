const mongoose = require("mongoose");

function isIdValid(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

module.exports = {
  isIdValid,
};
