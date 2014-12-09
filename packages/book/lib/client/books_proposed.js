Template.books_proposed.helpers({
  titles: function () {
    return Books.find({statut : "proposed"});
  }
});
