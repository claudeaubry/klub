getAllBooks = function () {
  return Books.find();
};

getBookTitleById = function (id) {
  var book = Books.findOne(id);
  return (book) ? book.title : "Pas de livre";
};

Meteor.startup(function () {
  Meteor.subscribe("all_books");
});
