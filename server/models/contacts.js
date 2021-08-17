const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const contactsSchema = new Schema({
  contactName: String,
  contactId: String,
  contactPhoneNumber: {type: String,
  required: true},
  isContact: Boolean
});

const Contacts = mongoose.model("Contacts", contactsSchema);

module.exports = Contacts;
