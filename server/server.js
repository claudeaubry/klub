Meteor.startup(function () {
  // Describe the link between Collections and JSON files
  schema = [
    {collection: Books, jsonKey: 'books'},
    {collection: Sessions, jsonKey: 'sessions'},
  ];

  // Reset Database only in environment dev
  if (process.env.NODE_ENV === 'development') {
    Sessions.remove({});
    Books.remove({});
    datas = Fixtures; // Specific datas for dev environment
  }
  else if (process.env.NODE_ENV === 'production') {
    datas = Datas; // Specific datas for prod environment
  }

  // Insert all datas describes in schema
  schema.forEach(function (table) {
    datas[table.jsonKey].forEach(function(record) {
      if (table.collection.findOne(record._id)) {
        table.collection.update(record._id, record);
      }
      else {
        table.collection.insert(record);
      }

    });
  });

  // Specific insert for users
  datas.users.forEach(function(user) {
    if (! Meteor.users.findOne({username: user.username})) {
      Accounts.createUser(user);
    }
  });
});
