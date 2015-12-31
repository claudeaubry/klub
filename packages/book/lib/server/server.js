Meteor.startup( () => {
  Meteor.publish("all_books", () => Books.find());
});
