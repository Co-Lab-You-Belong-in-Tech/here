const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const contactsSchema = new Schema({
  contactName: String,
  contactId: String,
  contactPhoneNumber: String,
  isContact: Boolean
});

const contacts = mongoose.model("contacts", contactsSchema);

module.exports = {
  model: contacts,
  schema: contactsSchema
};
