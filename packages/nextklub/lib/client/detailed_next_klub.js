Template.detailedNextKlub.helpers({
  klub: function () {
    return NextKlub.findOne({_id: this.toString()})
  }
})
Template.detailedNextKlub.helpers({
  typeLecture: function(name) {
    return name === 'lecture'
  },
  typeJeu: function(name) {
    return name === 'jeu'
  },
  typeScribing: function(name) {
    return name === 'scribing'
  },
  stateIs: function(state) {
    return klub.state === state
  }
})
