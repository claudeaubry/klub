Template.nextKlubsView.helpers({
  klubs: () => NextKlub.find({}, {sort: {date: +1}})
})

Template.nextKlubView.helpers({
  proposedBooksCount: () => new Library().proposedCount()
})

Template.nextKlubView.helpers({
  local: () => LocalData.findOne(),
  typeIs: function(type) {
    return this.type === type
  },
  stateIs: function(state) {
    return this.state === state
  }
})
