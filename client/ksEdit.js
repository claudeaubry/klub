Template.ksEdit.helpers({
  ks: function () {
    var ks = this;

    ks.books = Books.find();
    ks.book = Books.findOne(ks.book_id) ? Books.findOne(ks.book_id).title : "";

    return ks;
  }
});

Template.ksEdit.events({
  'submit form': function (elt) {
    var _id = $('input.id').val(),
      ks = _id ? KSessions.findOne(_id) : {};

    elt.preventDefault();
    ks.i = +$("input.i").val();
    ks.klubMaster = $("input.klubMaster").val();
    ks.voteer = $("input.vote").val();
    ks.meetup = $("input.meetup").val();
    ks.book_id = $("select[name=selBook]").val();
    // Update an existent record or create it
    _id ? KSessions.update(_id, ks) : KSessions.insert(ks);
  }
});
