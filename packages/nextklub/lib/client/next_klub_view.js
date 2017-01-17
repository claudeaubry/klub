Template.nextKlubsView.helpers({
  klubs: () => NextKlub.find({})
})

Template.nextKlubView.helpers({
  proposedBooksCount: () => new Library().proposedCount('book'),
  proposedGamesCount: () => new Library().proposedCount('game'),
  proposedVideosCount: () => new Library().proposedCount('video'),
  typeIs: function(type) {
    return this.type === type
  },
  stateIs: function(state) {
    return this.state === state
  }
})

Template.nextKlubView.events({
  'click .detailNext': function () {
    Session.set('typeKlub', this.type)
  }
})
