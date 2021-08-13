const mongoose = require("mongoose");
//connect to  mongodb
// eslint-disable-next-line no-undef
before(function(done) {
  mongoose.connect("mongodb://localhost/Here-database");

  mongoose.connection
    .once("open", function() {
      console.log("Connection successful");
      done();
    })
    .on("error", function() {
      // eslint-disable-next-line no-undef
      console.log("connection error:", error);
    });
});

// eslint-disable-next-line no-undef
beforeEach(function(done) {
  mongoose.connection.collections.contacts.drop(function() {
    done();
  });
});

// eslint-disable-next-line no-undef
beforeEach(function(done) {
  mongoose.connection.collections.users.drop(function() {
    done();
  });
});

// eslint-disable-next-line no-undef
beforeEach(function(done) {
  mongoose.connection.collections.locations.drop(function() {
    done();
  });
});

// eslint-disable-next-line no-undef
beforeEach(function(done) {
  mongoose.connection.collections.reviews.drop(function() {
    done();
  });
});
