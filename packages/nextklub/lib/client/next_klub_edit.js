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
    console.log("ns",ns)
    NextKlub.update(ns._id, ns);
    console.log("ns",NextKlub.findOne())
  },

  'click .archive': function (elt) {

  }
});

Template.nextKlub.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
  this.$("select[name='selBook']").val(this.$('input.book-id').val());
};
