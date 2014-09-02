Meteor.startup(function () {
  // Reset Database only in environment dev
  if (process.env.NODE_ENV === 'development') {
    KSessions.remove({});
    Books.remove({});

    // Specific insert for Books
    Fixtures.books.forEach(function(rec) {
      if (Books.findOne(rec._id)) {
        Books.update(rec._id, rec);
      }
      else {
        Books.insert(rec);
      }
    });

    Meteor.publish("all_books", function() {
      return Books.find();
    });

    // Specific insert for KSessions
    Fixtures.ksessions.forEach(function(rec) {
      if (KSessions.findOne(rec._id)) {
        KSessions.update(rec._id, rec);
      }
      else {
        KSessions.insert(rec);
      }
    });

    Meteor.publish("all_ksessions", function() {
      return KSessions.find();
    });

    // Specific insert for users
    Fixtures.users.forEach(function(user) {
      if (! Meteor.users.findOne({username: user.username})) {
        Accounts.createUser(user);
      }

    });
  }
});