Template.booksProposed.helpers({
  titles: () => {
    return Books.find({statut : "proposed"});
  }
});
