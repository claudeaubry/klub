Template.pastKlubList.helpers({
  klubAll: function () {
    var pastKlubList = [],
      pastKlubCollection = PastKlub.find({},
        {fields: {i: 1, book_id: 1}, sort: {i: -1}});

    pastKlubCollection.forEach( (elt) => {
      pastKlubList.push({i: elt.i, book: getBookTitleById(elt.book_id)});
    });

    return pastKlubList;
  }
});
