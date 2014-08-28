Template.proposal.titles = function () {
  return Books.find({statut : "proposed"});
};

Template.proposal.events = {
  'click .deleteBook': function () {
    return Books.remove(this._id)
  },
  'click .createBook': function () {
    $("#_idSubmit").val('');
    $("input#bookSubmit").val('');
    $("input#authorSubmit").val('');
    $("input#teaserSubmit").val('');
    Session.set('formTitle', 'Proposez un livre');
    Session.set('formBookAuction', 'Proposer');
  },
  'click .modifyBook': function () {
    var targetBook = Books.findOne(this._id);
    $("#_idSubmit").val(targetBook._id);
    $("#bookSubmit").val(targetBook.title);
    $("#authorSubmit").val(targetBook.author);
    $("#teaserSubmit").val(targetBook.teaser);
    Session.set('formTitle', 'Modifiez ce livre');
    Session.set('formBookAuction', 'Modifier');
  },

};
