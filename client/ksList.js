Template.ksList.helpers({
  ks: function () {
    var ksessions = [],
      ksCollection = KSessions.find({},
        {fields: {i: 1, book_id: 1}, sort: {i: -1}});

    ksCollection.forEach(function (elt) {
      var book = Books.findOne(elt.book_id);
      if (book) {
        ksessions.push({i: elt.i, book: book.title});
      } else {
        ksessions.push({i: elt.i, book: "aucun"});
      }
    });

    return ksessions;
  }
});
