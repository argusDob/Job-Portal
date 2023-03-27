const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedAt: { type: Date },
  updatedBy: { type: String },
  username: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, unique: true },
  // privileges: { type: String, default: '["CR--","---","----","----","----"]', required: true },
  // permissions: { type: String, default: 'low', required: true },
  // resetPasswordToken: { type: String, sparse: true },
  // resetPasswordExpires: { type: Date, sparse: true },
});

userSchema.pre("save", function (next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  next();
});

const userAccount = (module.exports = mongoose.model("Users", userSchema));

const anEmptyUserRecord = {
  updatedBy: null,
  email: null,
  username: null,
  // privileges: null,
  // permissions: null,
  // resetPasswordToken: null,
  // resetPasswordExpires: null,
};

module.exports.addUser = function (callback, newUser) {
  const newValues = {};
  for (let aField in anEmptyUserRecord) {
    if (newUser[aField]) {
      newValues[aField] = newUser[aField];
    }
  }
  userAccount.save(new userAccount(newValues), newUser.password, callback);
};
