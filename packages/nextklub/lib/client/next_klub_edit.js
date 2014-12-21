Template.nextKlubEdit.helpers({
  nextKlub: function () {
    return getNextKlub();
  },
  books: function () {
    return getProposedBooks();
  }
});


Template.nextKlubEdit.events({
  'submit form': function (elt) {
    var nextKlub = NextKlub.findOne();

    elt.preventDefault();
    nextKlub.date = $("input.date").val();
    nextKlub.voteer = $("input.vote").val();
    nextKlub.meetup = $("input.meetup").val();
    nextKlub.book_id = $("select[name=selBook]").val();

    NextKlub.update(nextKlub._id, nextKlub);
  },

  'click .archive': function (elt) {
    var nextKlub = NextKlub.findOne(),
      pastKlub = {};

    elt.preventDefault();
    pastKlub.date = nextKlub.date;
    pastKlub.voteer = nextKlub.voteer;
    pastKlub.meetup = nextKlub.meetup;
    pastKlub.book_id = nextKlub.book_id;
    pastKlub.i = PastKlub.find().count() + 1;

    PastKlub.insert(pastKlub);
    NextKlub.update(nextKlub._id, {});
    Router.go('adminPastKlubList');
  }
});

Template.nextKlubEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
  this.$("select[name='selBook']").val(this.$('input.book-id').val());
};
