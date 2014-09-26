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

    _id ? KSessions.update(_id, ks) : KSessions.insert(ks);
  }
});
