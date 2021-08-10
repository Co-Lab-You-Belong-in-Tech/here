const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: String,
  userId: String,
  userPhoneNumber: String,
  contacts: {
    contactName: String,
    contactId: String,
    contactPhoneNumber: String
  },
  importDate: String,
  updateDate: String,
  uploadId: String
});

const users = mongoose.model("users", usersSchema);

module.exports = {
  model: users,
  schema: usersSchema
};
