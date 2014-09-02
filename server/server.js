Meteor.startup(function () {
  // Reset Database only in environment dev
  if (process.env.NODE_ENV === 'development') {
    KSessions.remove({});
    Books.remove({});
    datas = Fixtures; // Specific datas for dev environment
  }
  else if (process.env.NODE_ENV === 'production') {
    datas = Datas; // Specific datas for prod environment
  }

  // Specific insert for Books
  datas.books.forEach(function(record) {
    if (Books.findOne(record._id)) {
      Books.update(record._id, record);
    }
    else {
      Books.insert(record);
    }
  });
  
  Meteor.publish("all_books", function() {
    return Books.find();
  });
  
  // Specific insert for KSessions
  datas.ksessions.forEach(function(record) {
    if (KSessions.findOne(record._id)) {
      KSessions.update(record._id, record);
    }
    else {
      KSessions.insert(record);
    }
  });
  
  Meteor.publish("all_ksessions", function() {
    return KSessions.find();
  });
  
  // Specific insert for users
  datas.users.forEach(function(user) {
    if (! Meteor.users.findOne({username: user.username})) {
      Accounts.createUser(user);
    }
  });
});
