Meteor.startup(function () {
  Meteor.publish("all_books", function() {
    return Books.find();
  });
  Meteor.publish("all_ksessions", function() {
    return KSessions.find();
  });
});
