Template.booksFrozen.helpers({
  titles: function () {
    return Books.find({statut : "frozen"});
  }
});

Template.booksFrozen.events({
  'click .repeat': function (elt) {
    var book = Books.findOne(this._id);

    elt.preventDefault();
    book.statut = "proposed";
    Books.update(this._id, book);
  }
});
