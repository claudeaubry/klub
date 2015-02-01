getAllBooks = function () {
  return Books.find({}, {sort: {statut : -1}});
};

getProposedBooks = function () {
  return Books.find({statut : {$in: ["proposed", "selected"]}});
};

getBookTitleById = function (id) {
  var book = Books.findOne(id);

  return (book) ? book.title : "Pas de livre";
};

associateBookToNextKlub = function (id) {
  var book = Books.findOne(id);

  book.statut = "selected";
  Books.update(id, book);
}

Meteor.startup(function () {
  Meteor.subscribe("all_books");
});
