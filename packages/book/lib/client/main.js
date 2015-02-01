getAllBooks = function () {
  return Books.find({}, {sort: {statut : -1}});
};

getBooksForNextKlubChoice = function () {
  return Books.find({statut : {$in: ["proposed", "selected"]}});
};

getBookTitleById = function (id) {
  var book = Books.findOne(id);

  return (book) ? book.title : "Pas de livre";
};

associateBookToNextKlub = function (id) {
  var book = Books.findOne(id);
  var previousBook = Books.findOne({statut : "selected"});

  if (previousBook) {
    previousBook.statut = "proposed";
    Books.update(previousBook._id, previousBook)
  };
  book.statut = "selected";
  Books.update(id, book);
};

discussedBookWhenPastKlub = function (id) {
  var book = Books.findOne(id);

  book.statut = "discussed";
  Books.update(id, book);
};

Meteor.startup(function () {
  Meteor.subscribe("all_books");
});
