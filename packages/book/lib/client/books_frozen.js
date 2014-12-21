Template.booksFrozen.helpers({
  titles: function () {
    return Books.find({statut : "frozen"});
  }
});
