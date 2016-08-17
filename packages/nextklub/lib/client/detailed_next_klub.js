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
  stateProp: function(name) {
    return name === 'propositions'
  },
  stateVote: function(name) {
    return name === 'voteEnCours'
  },
  stateChoisi: function(name) {
    return name === 'choixAssocié'
  }
})

Template.detailedNextKlub.events({
  'click .debutVote': function(elt) {
    const k = NextKlub.findOne({_id: this.toString()})
    elt.preventDefault()
    k.state = 'voteEnCours'
    k.dateprop = ''
    NextKlub.update(k._id, k)
  }
})
