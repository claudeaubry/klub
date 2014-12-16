Template.pastKlubEdit.helpers({
  pastKlub: function (i) {
    // this provides from url parameter
    return PastKlub.findOne({i: +this});
  },
  books: function () {
    return getAllBooks();
  }
});

Template.pastKlubEdit.events({
  'submit form': function (elt) {
    var _id = $('input.id').val(),
      ks = _id ? PastKlub.findOne(_id) : {};

    elt.preventDefault();
    ks.i = +$("input.i").val();
    ks.klubMaster = $("input.klubMaster").val() || "anonymous";
    ks.date = $("input.date").val();
    ks.voteer = $("input.vote").val();
    ks.meetup = $("input.meetup").val();
    ks.book_id = $("select[name=selBook]").val();
    // Update an existent record or create it
    if (_id) {
      PastKlub.update(_id, ks);
    } else {
      PastKlub.insert(ks);
    }
  },
  'click .delete': function (elt) {
    var _id = $('input.id').val();

    elt.preventDefault();
    PastKlub.remove(this._id);
    Router.go('admin');
  }
});

Template.pastKlubEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
 */
  this.$("select[name='selBook']").val(this.$('input.book-id').val());
};
