Template.pastKlubDisplay.helpers({
  pastKlubAll: () => {
    return PastKlub.find({}, {sort: {i: -1}})
  }
})
