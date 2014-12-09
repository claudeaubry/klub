Template.booksProposed.helpers({
  titles: function () {
    return Books.find({statut : "proposed"});
  }
});

Template.booksProposed.events = {
  'click .deleteBook': function () {
    return Books.remove(this._id);
  },
  'click .modifyBook': function () {
    var targetBook = Books.findOne(this._id);
    $("#_idSubmit").val(targetBook._id);
    $("#bookSubmit").val(targetBook.title);
    $("#authorSubmit").val(targetBook.author);
    $("#teaserSubmit").val(targetBook.teaser);
    $("#originSubmit").val(targetBook.origin);
    Session.set('formTitle', 'Modifiez ce livre');
    Session.set('formBookAuction', 'Modifier');
  }
};
