Meteor.startup(function () {
  Sessions.remove({});
  Books.remove({});

  sessionsFixtures.forEach(function(session) {
    Sessions.insert(session);
  });

  booksFixtures.forEach(function(book) {
    Books.insert(book);
  });

  klubsFixtures.forEach(function(klub) {
    Klubs.insert(klub);
  });

  usersFixtures.forEach(function(user) {
    if ( ! Meteor.users.findOne({username: user.username})) {
      Accounts.createUser(user);
    }
  });
});
