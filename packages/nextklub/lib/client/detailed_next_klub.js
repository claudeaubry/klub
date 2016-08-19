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
  'click .addBook': function(elt) {
    elt.preventDefault()
    Session.set('selectedBookId', null)
  },
  'click .debutVote': function(elt) {
    const k = NextKlub.findOne({_id: this.toString()})
    elt.preventDefault()
    k.state = 'voteEnCours'
    k.dateprop = ''
    NextKlub.update(k._id, k)
  },
  'click .klubFini': function(elt) {
    const pastKlub = {}
    const nextKlub = {}
    const k = NextKlub.findOne({_id: this.toString()})

    elt.preventDefault()
    pastKlub.date = k.date
    pastKlub.voteer = k.voteer
    pastKlub.meetup = k.meetup
    pastKlub.type = k.type
    pastKlub.book_id = k.book_id
    discussedBookWhenPastKlub(pastKlub.book_id)
    createPastKlub(pastKlub)
    nextKlub.state = 'propositions'
    nextKlub.type = k.type
    nextKlub.glyph = k.glyph
    NextKlub.update(k._id, nextKlub)
    Router.go('home')
  }
})
