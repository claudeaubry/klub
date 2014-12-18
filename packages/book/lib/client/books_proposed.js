Template.booksProposed.helpers({
  titles: function () {
    return Books.find({statut : "proposed"});
  }
});
