Template.ksEdit.helpers({
  ks: function () {
    var ks = this;
    ks.books = Books.find();
    return ks;
  }
});

Template.ksEdit.events({
  'submit form': function (elt) {
    var _id = $('input.id').val(),
      ks = _id ? KSessions.findOne(_id) : {};

    elt.preventDefault();
    ks.i = +$("input.i").val();
    ks.klubMaster = $("input.klubMaster").val() || "anonymous";
    ks.date = $("input.date").val();
    ks.voteer = $("input.vote").val();
    ks.meetup = $("input.meetup").val();
    ks.book_id = $("select[name=selBook]").val();
    // Update an existent record or create it
    if (_id) {
      KSessions.update(_id, ks);
    } else {
      KSessions.insert(ks);
    }
  },
  'click .delete': function (elt) {
    var _id = $('input.id').val();

    elt.preventDefault();
    KSessions.remove(this._id);
    Router.go('admin');
  }
});

Template.ksEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
 */
  this.$("select[name='selBook']").val(this.$('input.book-id').val());
};
