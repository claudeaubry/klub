Template.pastKlubDisplay.helpers({
  pastKlubAll: function () {
    return PastKlub.find({}, {sort: {i: -1}});
  }
});
