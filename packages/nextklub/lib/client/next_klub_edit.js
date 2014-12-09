Template.nextKlub.helpers({
  ns: function () {
    var ns = this;

    ns.books = Books.find();
    return ns;
  }
});

Template.nextKlub.events({
  'submit form': function (elt) {
    var ns = NextKlub.findOne();

    elt.preventDefault();
    ns.date = $("input.date").val();
    ns.voteer = $("input.vote").val();
    ns.meetup = $("input.meetup").val();
    ns.book_id = $("select[name=selBook]").val();

    NextKlub.update(ns._id, ns);
  },

  'click .archive': function (elt) {
    var ns = NextKlub.findOne(),
      ks = {};

    elt.preventDefault();
    ks.date = ns.date;
    ks.voteer = ns.voteer;
    ks.meetup = ns.meetup;
    ks.book_id = ns.book_id;
    ks.i = KSessions.find().count() + 1;
    
    KSessions.insert(ks);
    NextKlub.update(ns._id, {});
  }
});

Template.nextKlub.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
  this.$("select[name='selBook']").val(this.$('input.book-id').val());
};
