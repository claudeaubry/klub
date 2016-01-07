Template.booksProposed.helpers({
  titles: () => Books.find({statut : "proposed"})
});
