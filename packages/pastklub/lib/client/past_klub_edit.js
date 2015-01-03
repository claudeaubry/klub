Template.pastKlubEdit.helpers({
  pastKlub: function () {
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
      klub = PastKlub.findOne(_id);

    elt.preventDefault();
    klub.i = +$("input.i").val();
    klub.klubMaster = $("input.klubMaster").val() || "anonymous";
    klub.date = $("input.date").val();
    klub.voteer = $("input.vote").val();
    klub.meetup = $("input.meetup").val();
    klub.book_id = $("select[name=selBook]").val();

    PastKlub.update(_id, klub);
  },
  'click .delete': function (elt) {
    var _id = $('input.id').val();

    elt.preventDefault();
    PastKlub.remove(_id);
    Router.go('adminPastKlubList');
  }
});

Template.pastKlubEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
 */
  this.$("select[name='selBook']").val(this.$('input.book-id').val());
};
