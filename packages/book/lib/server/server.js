Meteor.startup(function () {
  Meteor.publish("all_books", function () {
    return Books.find();
  });
});
