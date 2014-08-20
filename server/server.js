function insertData(collection, datas) {
  datas.forEach(function(data) {
    collection.insert(data);
  });
}

Meteor.startup(function () {
  
  if (process.env.NODE_ENV !== 'production') {
    Sessions.remove({});
    Books.remove({});
    Klubs.remove({});
  }

  if (true) {
    _.keys(Fixtures, function (key) {
     console.log(key)      
    })
    
    Fixtures.sessions.forEach(function(session) {
      Sessions.insert(session);
    });

    insertData(Books, Fixtures.books);

    Fixtures.klubs.forEach(function(klub) {
      Klubs.insert(klub);
    });

    Fixtures.users.forEach(function(user) {
      if ( ! Meteor.users.findOne({username: user.username})) {
        Accounts.createUser(user);
      }
    });
  }
});
