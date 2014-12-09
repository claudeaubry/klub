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
    console.log("ns",ns)
    NextKlub.update(ns._id, ns);
    console.log("ns",NextKlub.findOne())
  },

  'click .archive': function (elt) {

  }
});

/*

    elt.preventDefault();
    ks.i = +$("input.i").val();
    ks.klubMaster = $("input.klubMaster").val();
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
  'click .archive': function (elt) {
  }
});

Template.ksEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
/*
  this.$("select[name='selBook']").val(this.$('input.book-id').val());
};
*/
