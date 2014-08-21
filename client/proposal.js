Template.proposal.titles = function(){
  return Books.find({statut : "proposed"});
};

Template.proposal.events = {
  'click .deleteBook': function(){ return Books.remove(this._id)},
  'click .modifyBook': function(){
    var targetBook = Books.findOne(this._id);
    $("#_idSubmit").val(targetBook._id);
    $("#bookSubmit").val(targetBook.title);
    $("#authorSubmit").val(targetBook.author);
    $("#teaserSubmit").val(targetBook.teaser);
    $("button[type=submit]").html("Modifier")
  },
};
