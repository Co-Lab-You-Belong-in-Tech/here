const assert = require("assert");
const users = require("../models/users");
const reviews = require("../models/reviews");
const contacts = require("../models/contacts");
const locations = require("../models/locations");

// eslint-disable-next-line no-undef
describe("saving to mongo", function() {
  // eslint-disable-next-line no-undef
  it("saves users to DB", function(done) {
    let user = new users.model({
      name: "Bill F.",
      userId: "1",
      userPhoneNumber: "314-555-1234",
      contacts: {
        contactName: "Greg R.",
        contactId: "2",
        contactPhoneNumber: "314-555-2345"
      }
    });
    user.save().then(function() {
      assert(user.isNew === false);
      done();
    });
  });
  // eslint-disable-next-line no-undef
  it("saves reviews to DB", function(done) {
    let review = new reviews.model({
      reviewId: "34",
      contactId: "2",
      locationId: "57",
      isReviewed: true,
      rating: 4,
      reviewDate: "Jan. 4, 2019"
    });
    review.save().then(function() {
      assert(review.isNew === false);
      done();
    });
  });
  // eslint-disable-next-line no-undef
  it("saves contacts to DB", function(done) {
    let contact = new contacts.model({
      contactName: "Greg R.",
      contactId: "2",
      contactPhoneNumber: "314-555-2345",
      isContact: true
    });
    contact.save().then(function() {
      assert(contact.isNew === false);
      done();
    });
  });
  // eslint-disable-next-line no-undef
  it("saves location to DB", function(done) {
    let location = new locations.model({
      contactName: "Greg R.",
      contactId: "2",
      contactPhoneNumber: "314-555-2345",
      isContact: true
    });
    location.save().then(function() {
      assert(location.isNew === false);
      done();
    });
  });
  //more tests here
});
